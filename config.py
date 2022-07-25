SECRET_KEY = "fahefhofhoiioafoiajfo"

HOSTNAME = 'database-2.cr9ruprtc0ib.us-east-1.rds.amazonaws.com'
PORT = '3306'
DATABASE = 'flask'
USERNAME = 'admin'
PASSWORD = '20020413'
DB_URI = 'mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8'.format(USERNAME, PASSWORD, HOSTNAME, PORT, DATABASE)
SQLALCHEMY_DATABASE_URI = DB_URI
SQLALCHEMY_TRACK_MODIFICATIONS = True


MAIL_SERVER = "smtp.qq.com"
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_DEBUG = True
MAIL_USERNAME = "316710519@qq.com"
MAIL_PASSWORD = "frvicghahgzpbhih"
MAIL_DEFAULT_SENDER = "316710519@qq.com"