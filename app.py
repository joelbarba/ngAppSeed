#!flask/bin/python
from flask import Flask, jsonify, abort, make_response, request
from items_API import items_api


STATIC_FOLDER = 'ngApp'
app = Flask(__name__, static_folder=STATIC_FOLDER)

app.register_blueprint(items_api)

@app.route('/test')
def test():
    return "Hey, the APP is up and running!"

@app.route('/')
@app.route('/<path:path>')
def index(path=None):
    if not path:
        return app.send_static_file('index.html')
    return app.send_static_file(path)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)




if __name__ == '__main__':
    app.run(debug=True)

    