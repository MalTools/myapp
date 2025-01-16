from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from nanoid import generate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, String, Integer
from sqlalchemy import inspect
from sqlalchemy import Table


db = SQLAlchemy()


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.String(21), primary_key=True, default=lambda: generate())  # 使用 nanoid 生成唯一的 ID
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)

    def __repr__(self):
        return f'<User {self.username}, Password {self.password}>'

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


class Survey(db.Model):
    __tablename__ = 'surveys'
    user_name = db.Column(db.String(80), primary_key=True)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(100), nullable=False)
    education = db.Column(db.String(100), nullable=False)
    familiar = db.Column(db.Boolean, nullable=False)
    time = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(100), nullable=False)
    sensitive = db.Column(db.String(100), nullable=False)
    readtime = db.Column(db.String(100), nullable=False)
    familiarpermission = db.Column(db.String(100), nullable=False)
    leakreact = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Survey for {self.user_name}>'


Base = declarative_base()


def get_or_create_table(table_name):
    metadata = db.metadata

    inspector = inspect(db.engine)
    if inspector.has_table(f"user_responses_{table_name}"):
        print(f"表 {table_name} 已经存在，使用现有表")

        dynamic_table = Table(f"user_responses_{table_name}", metadata, autoload_with=db.engine)

        class DynamicTable(db.Model):
            __table__ = dynamic_table
            __tablename__ = f"user_responses_{table_name}"

        return DynamicTable

    else:
        print(f"表 {table_name} 不存在，创建新表")

        class DynamicTable(db.Model):
            __tablename__ = f"user_responses_{table_name}"
            id = db.Column(db.Integer, primary_key=True, autoincrement=True)
            username = db.Column(db.String(80), nullable=False)
            app_number = db.Column(db.Integer, nullable=False)
            question_number = db.Column(db.Integer, nullable=False)
            question = db.Column(db.String(255), nullable=False)
            answer = db.Column(db.String(255), nullable=False)

        # 创建表
        db.create_all()
        return DynamicTable



