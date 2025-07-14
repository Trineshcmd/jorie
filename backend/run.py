from app.__init import weather_app

app = weather_app()

if __name__ == '__main__':
    app.run(debug=True)
