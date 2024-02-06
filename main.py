from firebase_functions import https_fn
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)
service_account_path = os.path.join("C:\\", "Users", "wiriy", "OneDrive", "Documents", "function.json")
cred = credentials.Certificate(service_account_path)
firebase_admin.initialize_app(cred)
db = firestore.client()

def get_filmovi():
    filmovi_ref = db.collection('film')
    return filmovi_ref.get()

def get_film(film_id):
    film_ref = db.collection('film').document(film_id)
    return film_ref.get().to_dict()

def get_prikazi(film_id):
    prikazi_ref = db.collection('prikaz').where('id_film', '==', film_id)
    return prikazi_ref.get()

@app.route('/filmovi')
def index():
    filmovi = get_filmovi()
    return render_template('filmovi.html', filmovi=filmovi)

@app.route('/film/<film_id>')
def film(film_id):
    film = get_film(film_id)
    prikazi = get_prikazi(film_id)
    return render_template('film.html', film=film, prikazi=prikazi)

if __name__ == '__main__':
    app.run(debug=True)
