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


class DynamicTableBase:
    id = Column(Integer, primary_key=True, autoincrement=True)  # 自增主键
    username = Column(String(80), nullable=False)  # 用户名
    app_number = Column(Integer, nullable=False)  # 应用编号
    question_number = Column(Integer, nullable=False)  # 问题编号
    question = Column(String(255), nullable=False)  # 问题描述
    answer = Column(String(255), nullable=False)  # 用户答案


# 动态创建表的工厂函数
class DynamicTableBase:
    id = Column(Integer, primary_key=True, autoincrement=True)  # 自增主键
    username = Column(String(80), nullable=False)  # 用户名
    app_number = Column(Integer, nullable=False)  # 应用编号
    question_number = Column(Integer, nullable=False)  # 问题编号
    question = Column(String(255), nullable=False)  # 问题描述
    answer = Column(String(255), nullable=False)  # 用户答案


# 动态创建表的工厂函数
def get_or_create_table(table_name):
    metadata = db.metadata  # 获取数据库的 metadata

    # 检查表是否存在
    inspector = inspect(db.engine)
    if inspector.has_table(table_name):
        print(f"表 {table_name} 已经存在，使用现有表")

        # 使用 db.Table 来加载现有表
        dynamic_table = Table(table_name, metadata, autoload_with=db.engine)

        # 将 Table 转换为具有 query 功能的模型类
        class DynamicTable(db.Model):
            __table__ = dynamic_table
            __tablename__ = table_name  # 设置动态表名

        return DynamicTable

    else:
        print(f"表 {table_name} 不存在，创建新表")

        # 如果表不存在，则创建新的动态表
        class DynamicTable(db.Model):
            __tablename__ = table_name
            extend_existing=True,
            exclude_from_alembic = True  # 确保不在 Alembic 管理下
            id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # 自增主键
            username = db.Column(db.String(80), nullable=False)  # 用户名
            app_number = db.Column(db.Integer, nullable=False)  # 应用编号
            question_number = db.Column(db.Integer, nullable=False)  # 问题编号
            question = db.Column(db.String(255), nullable=False)  # 问题描述
            answer = db.Column(db.String(255), nullable=False)  # 用户答案

        # 创建表
        db.create_all()
        return DynamicTable

