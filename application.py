from flask import Flask,session,g
from blueprints import bp_register
import config
from auxi import db
from flask_migrate import Migrate
from flask_cors import CORS

application = app = Flask(__name__)
application.config.from_object(config)
bp_register(application)
db.init_app(application)
migrate = Migrate(application, db)
CORS(application, resources=r'/*')


@application.before_request
def before_request():
    user_id = session.get("user_id")
    if user_id is None:
        g.user=None
    else:
        g.user=user_id
    return


if __name__ == '__main__':
    application.run()
