import base64
from flask_cors import CORS
from flask import Flask, render_template,request
from colorizers.colorize_function import colorize
import os

application = app = Flask(__name__)
CORS(application, resources=r'/*')


@application.route('/')
def hello_world():
    return "Hello World"


@application.route('/api-colorize',methods=['POST'])
def api():
    img = request.files.get("uploadImage1")
    img = colorize(img)
    img.save('temp.jpg')
    image = open('temp.jpg', 'rb')
    res = image.read()
    res = base64.b64encode(res)
    image.close()
    return res


if __name__ == '__main__':
    application.run(host='0.0.0.0')
