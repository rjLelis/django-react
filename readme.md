# Django Rest Framework + React

A sample project on how to integrate Django with React.js

## Project setup

1. Clone project
    ```
    > git clone git@github.com:rjLelis/django-react.git
    ```

2. Create a `virtual enviroment`
    ```
    > cd django-react
    > virtualenv venv
    > venv\Scripts\activate
    ```

3. Install packages

    ```
    > pip install -r requirements.txt
    > npm install
    ```

4. Migrate tables

    ```
    > python manage.py migrate
    ```

5. Load data to `leads` table

    ```
    > python manage.py loaddata leads
    ```

6. Compile webpack

    ```
    > npm run dev
    ```

7. Run project

    ```
    > python manage.py runserver 8080
    ```

[Tutorial](https://www.valentinog.com/blog/drf/)

#### Some implementations are my own
