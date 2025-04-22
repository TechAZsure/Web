const sensorsData = [
    {
      category: "Environmental Sensors",
      types: [
        {
          type: "Temperature Sensors",
          sensors: [
            { name: "DHT11", price: 60, rating: 4 },
            { name: "DS18B20", price: 110, rating: 4 },
            { name: "MLX90614", price: 450, rating: 5 },
          ],
        },
        {
          type: "Humidity Sensors",
          sensors: [
            { name: "DHT22", price: 90, rating: 4 },
            { name: "AM2302", price: 140, rating: 4 },
          ],
        },
        {
          type: "Pressure Sensors",
          sensors: [
            { name: "BMP180", price: 120, rating: 4 },
            { name: "BMP280", price: 160, rating: 5 },
          ],
        },
      ],
    },
    {
      category: "Motion & Proximity Sensors",
      types: [
        {
          type: "PIR Motion Sensors",
          sensors: [
            { name: "HC-SR501", price: 75, rating: 4 },
            { name: "AM312", price: 65, rating: 4 },
          ],
        },
        {
          type: "Ultrasonic Sensors",
          sensors: [
            { name: "HC-SR04", price: 85, rating: 4 },
          ],
        },
      ],
    },
    // Add more categories similarly...
  ];
  