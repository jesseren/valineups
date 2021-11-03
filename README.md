# valineups

To setup project:
- clone repo
- run
```
cd valineups
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python -m pip install django-cors-headers
cd app
npm install
```
To run dev server (Mac):
```
source env/bin/activate
python manage.py migrate
python manage.py runserver
```
To run dev server (Windows):
```
.\env\Scripts\activate
python manage.py migrate
python manage.py runserver
```
To run the app locally:
`npm start`


