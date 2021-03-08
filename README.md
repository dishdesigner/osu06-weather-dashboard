# Weather Dashboard

[SEE THE DEPLOYED APPLICATION HERE](https://dishdesigner.github.io/weather-dashboard/)

---

## Description

* This application is a simple weather dashboard with city search capabilities
* A user can search for a city and quickly get a 5-day forecast with minimal overhead and load times often apparent in larger, fuller-featured weather sites.
* The user can also store search history to keep a list of favorite cities to track and easily recall the current forecast for those locations. This is convenient for business travelers or tracking weather in locations of family and friends.
* This engine uses a simple search through OpenWeatherMap.org API to return current forecast conditions in selected locations.
* The page structure is simple: HTML with Bootstrap CSS and a mix of vanilla JS and jQuery. Dates and times are rendered using MomentJS.

* The UV Index reading adds a warning pill about sun hazard [according to the World Health Organization's UV Index](https://en.wikipedia.org/wiki/Ultraviolet_index). The UV Index scale provides the following warning levels:
    * 0-2: Low Risk
    * 2-5: Moderate Risk
    * 5-8: High Risk
    * 8-11: Very Risk
    * 11+: Extreme Risk

* Future feature expansions could include:
    * Geolocation with mobile devices to always display current location weather without needing search / API call
    * More visual display of current location / weather, possibly including a weather map centered on location with ~10-mile radius
    * Display of multiple "Favorite" cities' current weather in a carousel of cards
    * Mobile-first responsivity
    * User-selectable "layers" of weather data beyond basic stats: astronomical sun / moon, precipitation chances, weather emergency warnings, etc.

---

## Usage / Screenshot

The user simply types the name of a city to search and clicks the search button. The current searched city is added to the search history list below, and the searched city's forecast appears to the right.

```md
![alt text](assets/images/screenshot.png)
```

---

## License

See MIT License file within repo.