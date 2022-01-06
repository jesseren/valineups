# valineups

### To setup project:
- clone repo
- run
```
cd valineups
python -m venv env
source env/bin/activate
pip install -r requirements.txt
cd app
npm install
```


### To setup db
- download postgres https://www.postgresql.org/
- log in to postgres (terminal)

In psql:
```
create user valineups_admin;
create database valineups_db;
grant all privileges on database valineups_db to valineups_admin;
alter database valineups_db owner to valineups_admin;
```
In env:
```
python manage.py makemigrations
python manage.py migrate
python manage.py shell
from django.contrib.contenttypes.models import ContentType
ContentType.objects.all().delete()
python manage.py loaddata dump.json
```

### To backup db 
`python manage.py dumpdata > dump.json`

### To run dev server (Mac):
```
source env/bin/activate
python manage.py migrate
python manage.py runserver
```
### To run dev server (Windows):
```
.\env\Scripts\activate
python manage.py migrate
python manage.py runserver
```
### To run the app locally:
`npm start`


