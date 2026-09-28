const directoryConfig = { name: 'Shopping Center', logoUrl: '', timeZone: 'America/Lima', contactWhatsapp: '51950141414' };
let providersData = [];
const localBusinesses = [{"id":1,"name":"Axon Tec","description":"Tienda de accesorios para móviles","category":"Accesorios","type":"Accesorios para móviles","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/axon-tec.jpg","coverPhoto":"","rating":4.1,"reviews":3519,"openingHours":[]},{"id":2,"name":"Boxera","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51913251708","callPhone":"51913251708","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/boxera.jpg","coverPhoto":"","rating":4.7,"reviews":216,"openingHours":[]},{"id":3,"name":"Bizago Epil","description":"Servicio de depilación con cera","category":"Belleza","type":"Depilación con cera","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/bizago-epil.jpg","coverPhoto":"","rating":5.0,"reviews":204,"openingHours":[]},{"id":4,"name":"El Mundo de las Maletas","description":"Tienda de equipaje","category":"Comercio","type":"Tienda de equipaje","location":"","whatsapp":"51998133044","callPhone":"51998133044","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/el-mundo-de-las-maletas.jpg","coverPhoto":"","rating":3.9,"reviews":170,"openingHours":[]},{"id":5,"name":"Vape Station","description":"Tienda de vaporizadores","category":"Comercio","type":"Tienda de vaporizadores","location":"","whatsapp":"51986650930","callPhone":"51986650930","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/vape-station.png","coverPhoto":"","rating":4.7,"reviews":169,"openingHours":[]},{"id":6,"name":"Music Zone","description":"Tienda de instrumentos musicales","category":"Música","type":"Instrumentos musicales","location":"","whatsapp":"51930466270","callPhone":"51930466270","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/music-zone.jpg","coverPhoto":"","rating":4.5,"reviews":127,"openingHours":[]},{"id":7,"name":"Bermoney Barber Studio","description":"Barbería","category":"Belleza","type":"Barbería","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/bermoney-barber-studio.jpg","coverPhoto":"","rating":5.0,"reviews":87,"openingHours":[]},{"id":8,"name":"Joyas Pino","description":"Joyería","category":"Comercio","type":"Joyería","location":"","whatsapp":"51955066491","callPhone":"51955066491","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/joyas-pino.png","coverPhoto":"","rating":4.8,"reviews":82,"openingHours":[]},{"id":9,"name":"Largophone","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51908639872","callPhone":"51908639872","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/largophone.jpg","coverPhoto":"","rating":4.9,"reviews":76,"openingHours":[]},{"id":10,"name":"Addiction Tattoo","description":"Estudio de tatuajes","category":"Belleza","type":"Estudio de tatuajes","location":"Local 86","whatsapp":"51992566143","callPhone":"51992566143","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/addiction-tattoo.jpg","coverPhoto":"","rating":4.7,"reviews":75,"openingHours":[]},{"id":11,"name":"Inka Game Shop","description":"Tienda de videojuegos","category":"Entretenimiento","type":"Tienda de videojuegos","location":"","whatsapp":"51966205226","callPhone":"51966205226","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/inka-game-shop.jpg","coverPhoto":"","rating":4.7,"reviews":59,"openingHours":[]},{"id":12,"name":"Boost","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51983317702","callPhone":"51983317702","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/boost.jpg","coverPhoto":"","rating":4.4,"reviews":46,"openingHours":[]},{"id":13,"name":"Western Union","description":"Servicio de transferencias de dinero","category":"Servicios financieros","type":"Transferencias de dinero","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/western-union.jpg","coverPhoto":"","rating":2.1,"reviews":42,"openingHours":[]},{"id":14,"name":"Tattoo Supply","description":"Tienda de suministros para tatuajes","category":"Tatuajes","type":"Suministros para tatuajes","location":"","whatsapp":"51908916417","callPhone":"51908916417","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/tattoo-supply.jpg","coverPhoto":"","rating":4.8,"reviews":36,"openingHours":[]},{"id":15,"name":"The Cave Skateshop","description":"Tienda de monopatines","category":"Deportes","type":"Tienda de monopatines","location":"","whatsapp":"51987951046","callPhone":"51987951046","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/the-cave-skateshop.jpg","coverPhoto":"","rating":4.1,"reviews":36,"openingHours":[]},{"id":16,"name":"Chili Vaper","description":"Tienda de vaporizadores y cigarros electrónicos","category":"Comercio","type":"Vaporizadores y cigarros electrónicos","location":"","whatsapp":"51971018122","callPhone":"51971018122","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/chili-vaper.jpg","coverPhoto":"","rating":4.9,"reviews":34,"openingHours":[]},{"id":17,"name":"Taiyotaku Manga Store","description":"Librería especializada en manga","category":"Comercio","type":"Librería especializada en manga","location":"Local 171","whatsapp":"51994371447","callPhone":"51994371447","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/taiyotaku-manga-store.jpg","coverPhoto":"","rating":5.0,"reviews":30,"openingHours":[]},{"id":18,"name":"CR","description":"Tienda de vitaminas y suplementos","category":"Salud","type":"Vitaminas y suplementos","location":"","whatsapp":"51929452375","callPhone":"51929452375","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/cr.jpg","coverPhoto":"","rating":5.0,"reviews":19,"openingHours":[]},{"id":19,"name":"YUI Corp","description":"Importador","category":"Comercio","type":"Importador","location":"Local 201-A","whatsapp":"51912475171","callPhone":"51912475171","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/yui-corp.jpg","coverPhoto":"","rating":4.9,"reviews":19,"openingHours":[]},{"id":20,"name":"Crazy Stuff","description":"Tienda de artículos de colección","category":"Entretenimiento","type":"Artículos de colección","location":"","whatsapp":"51940278653","callPhone":"51940278653","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/crazy-stuff.jpg","coverPhoto":"","rating":4.8,"reviews":18,"openingHours":[]},{"id":21,"name":"TuCelu Store","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51937622127","callPhone":"51937622127","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/tucelu-store.jpg","coverPhoto":"","rating":3.7,"reviews":17,"openingHours":[]},{"id":22,"name":"Nonone Tattoo","description":"Estudio de tatuajes y piercings","category":"Belleza","type":"Tatuajes y piercings","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/nonone-tattoo.jpg","coverPhoto":"","rating":4.8,"reviews":17,"openingHours":[]},{"id":23,"name":"Sama Soporte","description":"Servicio de reparación de teléfonos","category":"Telefonía","type":"Reparación de teléfonos","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/sama-soporte.jpg","coverPhoto":"","rating":4.1,"reviews":14,"openingHours":[]},{"id":24,"name":"Tattoo Studio La Roca","description":"Estudio de tatuajes","category":"Belleza","type":"Estudio de tatuajes","location":"","whatsapp":"51996633472","callPhone":"51996633472","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/tattoo-studio-la-roca.jpg","coverPhoto":"","rating":4.9,"reviews":13,"openingHours":[]},{"id":25,"name":"La Forja","description":"Restaurante","category":"Restaurante","type":"Restaurante","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/la-forja.jpg","coverPhoto":"","rating":5.0,"reviews":11,"openingHours":[]},{"id":26,"name":"Japan Music","description":"Tienda de instrumentos musicales","category":"Música","type":"Instrumentos musicales","location":"","whatsapp":"51990278805","callPhone":"51990278805","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/japan-music.jpg","coverPhoto":"","rating":4.2,"reviews":10,"openingHours":[]},{"id":27,"name":"Óptica Megane","description":"Óptica","category":"Salud","type":"Óptica","location":"","whatsapp":"51902205637","callPhone":"51902205637","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/optica-megane.jpg","coverPhoto":"","rating":5.0,"reviews":8,"openingHours":[]},{"id":28,"name":"iPhone Center","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51994175686","callPhone":"51994175686","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/iphone-center.jpg","coverPhoto":"","rating":4.5,"reviews":8,"openingHours":[]},{"id":29,"name":"Tujatofit","description":"Tienda de vitaminas y suplementos","category":"Salud","type":"Vitaminas y suplementos","location":"","whatsapp":"51931488738","callPhone":"51931488738","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/tujatofit.jpg","coverPhoto":"","rating":5.0,"reviews":7,"openingHours":[]},{"id":30,"name":"Bobocha Bubble Tea","description":"Tienda de té de burbujas","category":"Restaurante","type":"Cafetería","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/bobocha-bubble-tea.jpg","coverPhoto":"","rating":4.3,"reviews":7,"openingHours":[]},{"id":31,"name":"Juseppy Tattoo","description":"Estudio de tatuajes y piercings","category":"Belleza","type":"Tatuajes y piercings","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/juseppy-tattoo.jpg","coverPhoto":"","rating":4.4,"reviews":7,"openingHours":[]},{"id":32,"name":"Chaufería El Santuario","description":"Restaurante","category":"Restaurante","type":"Restaurante","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/chauferia-el-santuario.jpg","coverPhoto":"","rating":2.2,"reviews":6,"openingHours":[]},{"id":33,"name":"Cell Point","description":"Tienda de accesorios para móviles","category":"Accesorios","type":"Accesorios para móviles","location":"Local 32, 34, 87 y 96","whatsapp":"51946417236","callPhone":"51946417236","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/cell-point.jpg","coverPhoto":"","rating":4.0,"reviews":6,"openingHours":[]},{"id":34,"name":"iRestoreit","description":"Servicio de reparación de teléfonos móviles","category":"Telefonía","type":"Reparación de teléfonos móviles","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/irestoreit.jpg","coverPhoto":"","rating":4.0,"reviews":5,"openingHours":[]},{"id":35,"name":"Servicio Técnico California","description":"Servicio de reparación de teléfonos móviles","category":"Telefonía","type":"Reparación de teléfonos móviles","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/servicio-tecnico-california.jpg","coverPhoto":"","rating":5.0,"reviews":5,"openingHours":[]},{"id":36,"name":"Cajero Bitcoin","description":"Cajero automático de criptomonedas","category":"Servicios financieros","type":"Cajero de criptomonedas","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/cajero-bitcoin.jpg","coverPhoto":"","rating":5.0,"reviews":5,"openingHours":[]},{"id":37,"name":"Nápoli Barbería Clásica","description":"Barbería","category":"Belleza","type":"Barbería","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/napoli-barberia-clasica.jpg","coverPhoto":"","rating":3.4,"reviews":5,"openingHours":[]},{"id":38,"name":"Womanity Boutique","description":"Boutique","category":"Comercio","type":"Boutique","location":"","whatsapp":"5117469835","callPhone":"5117469835","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/womanity-boutique.jpg","coverPhoto":"","rating":3.5,"reviews":4,"openingHours":[]},{"id":39,"name":"Worldweb Entertainment Store","description":"Tienda de videojuegos","category":"Entretenimiento","type":"Tienda de videojuegos","location":"","whatsapp":"51977537411","callPhone":"51977537411","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/worldweb-entertainment-store.jpg","coverPhoto":"","rating":4.5,"reviews":4,"openingHours":[]},{"id":40,"name":"Agente Interbank","description":"Agente bancario","category":"Servicios financieros","type":"Agente bancario","location":"","whatsapp":"5113119000","callPhone":"5113119000","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/agente-interbank.jpg","coverPhoto":"","rating":5.0,"reviews":3,"openingHours":[]},{"id":41,"name":"Vaporis","description":"Agencia de marketing","category":"Marketing","type":"Agencia de marketing","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/vaporis.jpg","coverPhoto":"","rating":5.0,"reviews":3,"openingHours":[]},{"id":42,"name":"Celu Centro","description":"Servicio de reparación de teléfonos móviles","category":"Telefonía","type":"Reparación de teléfonos móviles","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/celu-centro.jpg","coverPhoto":"","rating":5.0,"reviews":2,"openingHours":[]},{"id":43,"name":"Mapple Store Oficial","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51905432188","callPhone":"51905432188","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/mapple-store-oficial.jpg","coverPhoto":"","rating":5.0,"reviews":2,"openingHours":[]},{"id":44,"name":"Taekwondo NIM","description":"Escuela de taekwondo","category":"Deportes","type":"Escuela de taekwondo","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/taekwondo-nim.png","coverPhoto":"","rating":5.0,"reviews":2,"openingHours":[]},{"id":45,"name":"Eclipse Nails","description":"Salón de uñas","category":"Belleza","type":"Salón de uñas","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/eclipse-nails.jpg","coverPhoto":"","rating":3.0,"reviews":2,"openingHours":[]},{"id":46,"name":"Canelle Gift Shop","description":"Tienda de regalos","category":"Comercio","type":"Tienda de regalos","location":"","whatsapp":"51943297406","callPhone":"51943297406","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/canelle-gift-shop.jpg","coverPhoto":"","rating":3.0,"reviews":2,"openingHours":[]},{"id":47,"name":"Liss Fabiana","description":"Salón de belleza y peluquería","category":"Belleza","type":"Salón de belleza y peluquería","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/liss-fabiana.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":48,"name":"Máximo Placer","description":"Cafetería","category":"Restaurante","type":"Cafetería","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/maximo-placer.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":49,"name":"Ibiza Smart","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"51959794160","callPhone":"51959794160","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/ibiza-smart.png","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":50,"name":"Luxor Travel S.A.C","description":"Agencia de viajes","category":"Servicios","type":"Agencia de viajes","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/luxor-travel-s-a-c.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":51,"name":"Nextphone","description":"Tienda comercial","category":"Comercio","type":"Tienda comercial","location":"","whatsapp":"51994033115","callPhone":"51994033115","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/nextphone.jpg","coverPhoto":"","rating":4.0,"reviews":1,"openingHours":[]},{"id":52,"name":"Karacolly","description":"Tienda de regalos","category":"Comercio","type":"Tienda de regalos","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/karacolly.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":53,"name":"Coffee Shop","description":"Cafetería","category":"Restaurante","type":"Cafetería","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/coffee-shop.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":54,"name":"Allimi Lashes & Nails","description":"Salón de uñas y pestañas","category":"Belleza","type":"Salón de uñas y pestañas","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/allimi-lashes-nails.jpg","coverPhoto":"","rating":4.0,"reviews":1,"openingHours":[]},{"id":55,"name":"Celutronic Giraldo","description":"Servicio de reparación de teléfonos móviles","category":"Telefonía","type":"Reparación de teléfonos móviles","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/celutronic-giraldo.jpg","coverPhoto":"","rating":1.0,"reviews":1,"openingHours":[]},{"id":56,"name":"LimaSmokeShop","description":"Boutique","category":"Comercio","type":"Boutique","location":"","whatsapp":"51987986566","callPhone":"51987986566","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/limasmokeshop.png","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":57,"name":"Othila Spa","description":"Spa","category":"Belleza","type":"Spa","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/othila-spa.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":58,"name":"Stevenscastrotattoo","description":"Estudio de tatuajes y piercings","category":"Belleza","type":"Tatuajes y piercings","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/stevenscastrotattoo.jpg","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":59,"name":"Multifácil","description":"Institución financiera","category":"Servicios financieros","type":"Institución financiera","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/multifacil.jpg","coverPhoto":"","rating":1.0,"reviews":1,"openingHours":[]},{"id":60,"name":"Cataleya Nails & Lashes","description":"Salón de uñas","category":"Belleza","type":"Salón de uñas","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/cataleya-nails-lashes.png","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":61,"name":"DA Accesorios","description":"Tienda de accesorios para automóviles","category":"Automóviles","type":"Accesorios para automóviles","location":"","whatsapp":"51940841423","callPhone":"51940841423","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/da-accesorios.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":62,"name":"My Service","description":"Servicios técnicos","category":"Servicios técnicos","type":"Servicio técnico","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/my-service.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":63,"name":"Asesoría de Viajes JG","description":"Agencia de viajes","category":"Servicios","type":"Agencia de viajes","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/asesoria-de-viajes-jg.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":64,"name":"Comic Tattoo","description":"Estudio de tatuajes y piercings","category":"Belleza","type":"Tatuajes y piercings","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/comic-tattoo.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":65,"name":"KilPop Clothing","description":"Tienda de ropa","category":"Moda","type":"Tienda de ropa","location":"","whatsapp":"51997275471","callPhone":"51997275471","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/kilpop-clothing.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":66,"name":"Vape Fast SAC","description":"Mayorista de accesorios electrónicos","category":"Accesorios","type":"Mayorista de accesorios electrónicos","location":"Local 174","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/vape-fast-sac.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":67,"name":"Stagen","description":"Tienda de relojes","category":"Comercio","type":"Tienda de relojes","location":"","whatsapp":"51941384299","callPhone":"51941384299","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/stagen.png","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":68,"name":"Torta Alta","description":"Institución educativa","category":"Educación","type":"Institución educativa","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/torta-alta.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":69,"name":"ePack","description":"Fabricante","category":"Manufactura","type":"Fabricante","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/epack.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":70,"name":"Vector Smart","description":"Empresa de software","category":"Tecnología","type":"Empresa de software","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/vector-smart.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":71,"name":"VIU Balloon","description":"Tienda de globos","category":"Eventos","type":"Tienda de globos","location":"","whatsapp":"51982966211","callPhone":"51982966211","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/viu-balloon.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":72,"name":"Móviles Venperú","description":"Tienda de móviles","category":"Telefonía","type":"Tienda de móviles","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/moviles-venperu.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":73,"name":"Soter","description":"Bazar de artículos tácticos y outdoor","category":"Comercio","type":"Artículos tácticos y outdoor","location":"","whatsapp":"51964735879","callPhone":"51964735879","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/soter.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":74,"name":"Diego","description":"Tienda de calzado","category":"Comercio","type":"Tienda de calzado","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/diego.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":75,"name":"Bodega del Pino","description":"Tienda general","category":"Comercio","type":"Tienda general","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/bodega-del-pino.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":76,"name":"Sensual Toys","description":"Tienda de entretenimiento para adultos","category":"Adultos","type":"Tienda para adultos","location":"","whatsapp":"51981658650","callPhone":"51981658650","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/sensual-toys.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":77,"name":"Nails Queen","description":"Salón de belleza","category":"Belleza","type":"Salón de belleza","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/nails-queen.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":78,"name":"Dona Pepa","description":"Restaurante","category":"Restaurante","type":"Restaurante","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/dona-pepa.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":79,"name":"Entre Bebés y Niños","description":"Tienda de ropa para bebés y niños","category":"Moda","type":"Ropa para bebés y niños","location":"","whatsapp":"51987925816","callPhone":"51987925816","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"images/logos/entre-bebes-y-ninos.jpg","coverPhoto":"","rating":null,"reviews":null,"openingHours":[]},{"id":80,"name":"Shawarmas El Faraón Express","description":"Restaurante de comida rápida","category":"Restaurante","type":"Comida rápida","location":"","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"","coverPhoto":"","rating":4.0,"reviews":23,"openingHours":[]},{"id":81,"name":"Arquerosperu","description":"Tienda de artículos deportivos","category":"Deportes","type":"Artículos deportivos","location":"Local 180","whatsapp":"51913114586","callPhone":"51913114586","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"","coverPhoto":"","rating":4.0,"reviews":11,"openingHours":[]},{"id":82,"name":"UELE","description":"Agencia de marketing olfativo","category":"Marketing","type":"Marketing olfativo","location":"Local 42","whatsapp":"","callPhone":"","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"","coverPhoto":"","rating":5.0,"reviews":1,"openingHours":[]},{"id":83,"name":"Taberna del Vapeador","description":"Tienda de vaporizadores","category":"Comercio","type":"Tienda de vaporizadores","location":"Local 166","whatsapp":"51927063800","callPhone":"51927063800","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"","coverPhoto":"","rating":4.8,"reviews":16,"openingHours":[]},{"id":84,"name":"Clock","description":"Tienda de relojes","category":"Comercio","type":"Tienda de relojes","location":"","whatsapp":"51914651451","callPhone":"51914651451","additionalPhones":[],"instagram":"","facebook":"","tiktok":"","products":[],"services":[],"profilePhoto":"","coverPhoto":"","rating":5.0,"reviews":71,"openingHours":[]}]

function parseBusinessCsv(csv) {
    const rows = [];
    let row = [], cell = '', quoted = false;
    for (let i = 0; i < csv.length; i++) {
        const char = csv[i], next = csv[i + 1];
        if (char === '"' && quoted && next === '"') { cell += '"'; i++; }
        else if (char === '"') quoted = !quoted;
        else if (char === ',' && !quoted) { row.push(cell.trim()); cell = ''; }
        else if ((char === '\n' || char === '\r') && !quoted) {
            if (char === '\r' && next === '\n') i++;
            row.push(cell.trim());
            if (row.some(Boolean)) rows.push(row);
            row = []; cell = '';
        } else cell += char;
    }
    if (cell || row.length) { row.push(cell.trim()); rows.push(row); }
    if (rows.length < 2) return [];
    const headers = rows.shift().map(value => value.replace(/^\uFEFF/, '').toLowerCase());
    const get = (record, ...names) => names.map(name => record[name] || '').find(Boolean) || '';
    return rows.map((values, index) => {
        const row = Object.fromEntries(headers.map((key, i) => [key, values[i] || '']));
        const phone1 = get(row, 'telefono_1', 'telefono 1', 'whatsapp');
        const phone2 = get(row, 'telefono_2', 'telefono 2');
        const fullLocation = [
            get(row, 'piso') && `Piso ${get(row, 'piso')}`,
            get(row, 'pasillo') && `Pasillo ${get(row, 'pasillo')}`,
            get(row, 'local') && `Local ${get(row, 'local')}`
        ].filter(Boolean).join(' · ');
        const days = get(row, 'dias').split(/[|; ]+/).filter(Boolean).map(value => Number(value)).filter(value => value >= 0 && value <= 6);
        const opens = get(row, 'abre'), closes = get(row, 'cierra');
        return {
            id: Number(get(row, 'id')) || index + 1,
            name: get(row, 'nombre'), description: get(row, 'descripcion'),
            category: get(row, 'categoria'), type: get(row, 'tipo'), location: fullLocation || get(row, 'ubicacion'),
            whatsapp: phone1, callPhone: phone1, additionalPhones: phone2 ? [phone2] : [],
            instagram: get(row, 'instagram'), facebook: get(row, 'facebook'), tiktok: get(row, 'tiktok'),
            products: get(row, 'productos').split(/[|;]/).filter(Boolean),
            services: get(row, 'servicios').split(/[|;]/).filter(Boolean),
            profilePhoto: get(row, 'logo', 'foto de perfil'), coverPhoto: get(row, 'foto de portada'),
            rating: Number(get(row, 'calificacion')) || null,
            reviews: Number(get(row, 'opiniones')) || null,
            openingHours: days.length && opens && closes ? [{ days, opens, closes }] : []
        };
    }).filter(item => item.name);
}

function loadBusinesses() {
    if (location.protocol === 'file:') {
        providersData = localBusinesses;
        init();
        return;
    }
    fetch('negocios.csv').then(response => {
        if (!response.ok) throw new Error('No se pudo cargar negocios.csv');
        return response.text();
    }).then(csv => {
        providersData = parseBusinessCsv(csv);
        init();
    }).catch(error => {
        console.error(error);
        providersData = localBusinesses;
        init();
    });
}

        // Estado de categorías, filtros y ficha abierta.
        let activeCategory = "Todos";
        let activeType = "all";
        let activeRating = 0;
        let activeSort = 'original';
        let modalReturnFocus = null;
        let modalCloseTimer = null;
        let currentDetailId = null;
        let categoryOptions = [];
        const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
        const normalizeSearch = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
        const matchesSearch = (item, query) => !query || normalizeSearch([item.name, item.description, item.category, item.type, item.location, ...item.products, ...item.services].join(' ')).includes(query);
        const businessInitials = name => String(name || '').trim().split(/\s+/).slice(0, 2).map(word => word[0] || '').join('').toLocaleUpperCase('es');
        const formatPeruvianPhone = value => {
            const digits = String(value || '').replace(/\D/g, '');
            const national = digits.startsWith('51') && digits.length === 11 ? digits.slice(2) : digits;
            return national.length === 9
                ? `${national.slice(0, 3)}\u00a0\u00a0${national.slice(3, 6)}\u00a0\u00a0${national.slice(6)}`
                : digits;
        };
        const safePhoto = value => {
            const url = String(value || '').trim();
            return /^(https?:\/\/|\.?\.?\/|[a-z0-9_-][a-z0-9_./-]*$)/i.test(url) ? url : '';
        };
        const whatsappUrl = item => {
            const digits = String(item.whatsapp || '').replace(/\D/g, '');
            return digits.length >= 8 && digits.length <= 15
                ? `https://wa.me/${digits}?text=${encodeURIComponent('Hola, vi tu negocio en el directorio de San Miguel, deseo más información sobre tu negocio...')}`
                : null;
        };
        function syncCategoryControls() {
            document.getElementById('categoryNavigation').innerHTML = categoryOptions.map((name, index) =>
                `<button type="button" class="category-option" data-category-index="${index}" aria-pressed="${name === activeCategory}">${escapeHtml(name)}</button>`
            ).join('');
            const categoryNav = document.getElementById('categoryNavigation');
            const selectedCategory = categoryNav.querySelector('[aria-pressed="true"]');
            if (selectedCategory) {
                const selectedOffset = selectedCategory.getBoundingClientRect().left - categoryNav.getBoundingClientRect().left + categoryNav.scrollLeft;
                const centeredScrollLeft = selectedOffset - (categoryNav.clientWidth - selectedCategory.offsetWidth) / 2;
                categoryNav.scrollTo({
                    left: activeCategory === 'Todos' ? 0 : Math.max(0, centeredScrollLeft),
                    behavior: 'smooth'
                });
            }
            const types = [...new Set(providersData.filter(item => activeCategory === 'Todos' || item.category === activeCategory).map(item => item.type))];
            const typeFilter = document.getElementById('typeFilter');
            typeFilter.innerHTML = '<option value="all">Todos los tipos</option>' + types.map(type => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');
            typeFilter.value = activeType;
            document.getElementById('ratingFilter').value = String(activeRating);
        }

        // Inicialización
        function init() {
            categoryOptions = ['Todos', ...new Set(providersData.map(item => item.category))];
            // Ajusta directoryConfig para cada mercado, galería, centro comercial o feria.
            document.title = `${directoryConfig.name} - Negocios, productos y servicios`;
            document.getElementById('directoryName').textContent = directoryConfig.name;
            const directoryPhone = String(directoryConfig.contactWhatsapp || '').replace(/\D/g, '');
            if (directoryPhone.length >= 8 && directoryPhone.length <= 15) {
                document.getElementById('subscribeLink').href = `https://wa.me/${directoryPhone}?text=${encodeURIComponent('Hola, quiero suscribirme gratis al directorio web de San Miguel...')}`;
                document.getElementById('contactLink').href = `https://wa.me/${directoryPhone}?text=${encodeURIComponent('Hola, quiero más información sobre el directorio web de San Miguel...')}`;
            }
            document.getElementById('businessLogo').alt = directoryConfig.name;
            document.querySelector('.header-brand').setAttribute('aria-label', `${directoryConfig.name}, inicio`);
            if (directoryConfig.logoUrl) document.getElementById('businessLogo').src = directoryConfig.logoUrl;
            document.getElementById('categoryNavigation').addEventListener('click', event => {
                const button = event.target.closest('[data-category-index]');
                if (button) selectCategory(categoryOptions[Number(button.dataset.categoryIndex)]);
            });
            const detailModal = document.getElementById('modalDetail');
            detailModal.addEventListener('click', event => {
                if (event.target === detailModal) toggleModal('modalDetail', false);
            });
            document.addEventListener('keydown', event => {
                if (detailModal.classList.contains('hidden')) return;
                if (event.key === 'Escape') {
                    event.preventDefault();
                    toggleModal('modalDetail', false);
                } else if (event.key === 'Tab') {
                    const focusable = [...detailModal.querySelectorAll('button:not([disabled]), a[href]')]
                        .filter(element => !element.classList.contains('hidden'));
                    if (!focusable.length) return;
                    const first = focusable[0], last = focusable.at(-1);
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            });
            applyFilters();
            window.lucide?.createIcons?.();
            const siteHeader = document.getElementById('siteHeader');
            let lastScrollY = window.scrollY;
            let hiddenDistance = 0;
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                const movement = currentScrollY - lastScrollY;
                const headerHeight = siteHeader.offsetHeight;
                hiddenDistance = currentScrollY < 30
                    ? 0
                    : Math.max(0, Math.min(headerHeight, hiddenDistance + movement * 0.75));
                siteHeader.style.transform = `translateY(-${hiddenDistance}px)`;
                lastScrollY = currentScrollY;
            }, { passive: true });
        };

        // Seleccionar Categoría
        function selectCategory(catName) {
            activeCategory = catName;
            activeType = 'all';
            document.getElementById('searchInput').value = '';
            document.getElementById('mobileSearchInput').value = '';
            applyFilters();
        }

        // Cambiar subcategoría o tipo de negocio
        function setTypeFilter(type) {
            activeType = type;
            applyFilters();
        }
        function setRatingFilter(rating) {
            activeRating = Number(rating) || 0;
            applyFilters();
        }
        function setSortOrder(order) {
            activeSort = ['original', 'rating', 'reviews', 'name'].includes(order) ? order : 'original';
            applyFilters();
        }
        function toggleFilters(force) {
            const panel = document.getElementById('moreFilters');
            const button = document.getElementById('filterToggle');
            const shouldOpen = typeof force === 'boolean' ? force : panel.classList.contains('hidden');
            panel.classList.toggle('hidden', !shouldOpen);
            button.setAttribute('aria-expanded', String(shouldOpen));
        }
        // Restablecer Filtros
        function resetFilters() {
            document.getElementById('searchInput').value = '';
            const mobileSearch = document.getElementById('mobileSearchInput'); if (mobileSearch) mobileSearch.value = '';
            activeCategory = "Todos";
            activeType = "all";
            activeRating = 0;
            activeSort = 'original';
            document.getElementById('typeFilter').value = 'all';
            document.getElementById('ratingFilter').value = '0';
            document.getElementById('sortFilter').value = 'original';

            applyFilters();
        }
        function goHome() {
            resetFilters();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Filtrar y Renderizar Tarjetas
        function applyFilters(now = new Date()) {
            const searchValue = normalizeSearch(document.getElementById('searchInput').value);
            document.getElementById('mobileSearchInput').value = document.getElementById('searchInput').value;
            if (searchValue) activeCategory = 'Todos';

            const matchesExplicitFilters = item => {
                const matchesType = activeType === 'all' || item.type === activeType;
                const matchesRating = activeRating === 0 || (Number.isFinite(item.rating) && item.rating >= activeRating);
                return matchesType && matchesRating && matchesSearch(item, searchValue);
            };

            const filtered = providersData.filter(item =>
                (activeCategory === 'Todos' || item.category === activeCategory) && matchesExplicitFilters(item)
            );
            syncCategoryControls();

            const sorters = {
                rating: (a, b) => (Number.isFinite(b.rating) ? b.rating : -1) - (Number.isFinite(a.rating) ? a.rating : -1),
                reviews: (a, b) => (Number(b.reviews) || -1) - (Number(a.reviews) || -1),
                name: (a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
            };
            if (sorters[activeSort]) filtered.sort(sorters[activeSort]);

            document.getElementById('resultsCount').textContent = `${filtered.length} ${filtered.length === 1 ? 'resultado' : 'resultados'}`;
            renderGrid(filtered, now);
        }

        // Renderizar fichas con campos públicos de NEGOCIOS.
        function renderGrid(items, now = new Date()) {
            const grid = document.getElementById('providersGrid');
            const emptyState = document.getElementById('emptyState');
            if (!items.length) {
                grid.innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }
            emptyState.classList.add('hidden');
            grid.innerHTML = items.map(item => {
                const contact = whatsappUrl(item);
                const profile = safePhoto(item.profilePhoto);
                const hasRating = Number.isFinite(item.rating);
                const ratingMarkup = !hasRating ? '<span class="provider-rating-unavailable">Sin calificación</span>' : `<span class="provider-rating" aria-label="Calificación ${escapeHtml(item.rating)} de 5">★ ${escapeHtml(item.rating.toFixed(1))}${item.reviews ? `<span> (${escapeHtml(item.reviews.toLocaleString('es-PE'))})</span>` : ''}</span>`;
                return `
                <article class="provider-card" role="button" tabindex="0" onclick="if (!event.target.closest('a,button')) openDetailModal(${item.id})" onkeydown="if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('a,button')) { event.preventDefault(); openDetailModal(${item.id}); }" aria-label="Abrir ficha de ${escapeHtml(item.name)}">
                    <div class="provider-primary">
                        <span class="provider-avatar" aria-hidden="true">
                            ${profile ? `<img src="${escapeHtml(profile)}" alt="" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden>${escapeHtml(businessInitials(item.name))}</span>` : `<span>${escapeHtml(businessInitials(item.name))}</span>`}
                        </span>
                        <span class="provider-main">
                            <span class="provider-top">
                                <span class="provider-classification">${escapeHtml(item.category)} · ${escapeHtml(item.type)}</span>
                            </span>
                            <span class="provider-name">${escapeHtml(item.name)}</span>
                            <span class="provider-description">${escapeHtml(item.description)}</span>
                            <span class="provider-rating-row">${ratingMarkup}</span>
                        </span>
                    </div>
                    <div class="provider-footer">
                        ${item.location ? `<span class="provider-location"><i data-lucide="map-pin" class="w-3.5 h-3.5 shrink-0" aria-hidden="true"></i><span>${escapeHtml(item.location)}</span></span>` : ''}
                        ${contact ? `<a href="${escapeHtml(contact)}" target="_blank" rel="noopener noreferrer" class="provider-whatsapp" aria-label="Contactar a ${escapeHtml(item.name)} por WhatsApp">WhatsApp</a>` : ''}
                    </div>
                </article>`;
            }).join('');
            window.lucide?.createIcons?.();
        }

        function openDetailModal(id) {
            const item = providersData.find(record => record.id === id);
            if (!item) return;
            currentDetailId = id;
            const image = document.getElementById('modalImg');
            const cover = safePhoto(item.coverPhoto);
            if (cover) image.src = cover;
            else image.removeAttribute('src');
            image.classList.toggle('hidden', !cover);
            image.alt = cover ? `Portada de ${item.name}` : '';
            const profile = safePhoto(item.profilePhoto);
            const profileImage = document.getElementById('modalProfileImg');
            if (profile) profileImage.src = profile;
            else profileImage.removeAttribute('src');
            profileImage.classList.toggle('hidden', !profile);
            profileImage.onerror = () => { profileImage.classList.add('hidden'); document.getElementById('modalInitials').classList.remove('hidden'); };
            profileImage.alt = profile ? `Logo o foto de ${item.name}` : '';
            const initials = document.getElementById('modalInitials');
            initials.textContent = businessInitials(item.name);
            initials.classList.toggle('hidden', Boolean(profile));
            document.getElementById('modalTitle').textContent = item.name;
            document.getElementById('modalCategory').textContent = item.category;
            document.getElementById('modalTypeBadge').textContent = item.type;
            document.getElementById('modalFloorLocation').textContent = item.location || 'No informado';
            document.getElementById('modalFloorLocationRow').classList.toggle('hidden', !item.location);
            document.getElementById('modalPhone').textContent = formatPeruvianPhone(item.callPhone) || 'No informado';
            document.getElementById('modalPhoneRow').classList.toggle('hidden', !item.callPhone);
            document.getElementById('modalRating').textContent = Number.isFinite(item.rating) ? `★ ${item.rating.toFixed(1)} de 5` : 'Sin calificación disponible';
            const ratingReviews = document.getElementById('modalRatingReviews');
            ratingReviews.textContent = item.reviews ? ` (${item.reviews.toLocaleString('es-PE')} opiniones)` : '';
            ratingReviews.classList.toggle('hidden', !item.reviews);
            document.getElementById('modalDescription').textContent = item.description;
            const contactLinks = [];
            const phoneNumbers = (item.additionalPhones || []).filter(Boolean);
            phoneNumbers.forEach(phone => {
                const dial = String(phone).replace(/[^+\d]/g, '');
                if (dial) contactLinks.push(`<a href="tel:${escapeHtml(dial)}" class="px-3 py-2 rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">Teléfono adicional: ${escapeHtml(formatPeruvianPhone(phone))}</a>`);
            });
            [['Instagram',item.instagram],['Facebook',item.facebook],['TikTok',item.tiktok]].forEach(([label,url]) => {
                if (/^https:\/\//i.test(url || '')) contactLinks.push(`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">${label}</a>`);
            });
            document.getElementById('modalContactLinks').innerHTML = contactLinks.join('');
            const featureMarkup = values => values.map(value => `<li class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">${escapeHtml(value)}</li>`).join('');
            document.getElementById('modalProducts').innerHTML = featureMarkup(item.products || []);
            document.getElementById('modalServices').innerHTML = featureMarkup(item.services || []);
            document.getElementById('modalProductsSection').classList.toggle('hidden', !item.products?.length);
            document.getElementById('modalServicesSection').classList.toggle('hidden', !item.services?.length);
            const dial = String(item.callPhone || '').replace(/[^+\d]/g, '');
            const callButton = document.getElementById('modalCallBtn');
            if (dial) callButton.href = `tel:${dial}`;
            else callButton.removeAttribute('href');
            callButton.classList.toggle('hidden', !dial);
            const contact = whatsappUrl(item);
            const contactButton = document.getElementById('modalWhatsappBtn');
            if (contact) contactButton.href = contact;
            else contactButton.removeAttribute('href');
            contactButton.textContent = 'Contactar por WhatsApp';
            contactButton.classList.toggle('hidden', !contact);
            toggleModal('modalDetail', true);
            window.lucide?.createIcons?.();
        }

        // Controlador Genérico de Modales
        function toggleModal(modalId, show) {
            const modal = document.getElementById(modalId);
            if (!modal) return;

            if (show) {
                clearTimeout(modalCloseTimer);
                modalReturnFocus = document.activeElement;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                modal.querySelector('[aria-label="Cerrar ficha"]')?.focus();
                setTimeout(() => {
                    const content = modal.querySelector('div');
                    if(content) {
                        content.classList.remove('scale-95', 'opacity-0');
                        content.classList.add('scale-100', 'opacity-100');
                    }
                }, 10);
            } else {
                if (modal.classList.contains('hidden')) return;
                const content = modal.querySelector('div');
                if(content) {
                    content.classList.remove('scale-100', 'opacity-100');
                    content.classList.add('scale-95', 'opacity-0');
                }
                clearTimeout(modalCloseTimer);
                modalCloseTimer = setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                    currentDetailId = null;
                    (modalReturnFocus?.isConnected ? modalReturnFocus : document.getElementById('searchInput')).focus();
                }, 200);
            }
        }

        function syncMobileSearch(value) { const el=document.getElementById('searchInput'); if(el){el.value=value; applyFilters();} }
        function showSearchResults(event) {
            event.preventDefault();
            const field = event.currentTarget.querySelector('input');
            const query = field.value.trim();
            if (!query) return;
            document.getElementById('searchInput').value = field.value;
            applyFilters();
            const emptyState = document.getElementById('emptyState');
            const target = emptyState.classList.contains('hidden')
                ? document.getElementById('resultsToolbar')
                : emptyState;
            const isMobileSearch = field.id === 'mobileSearchInput';
            if (isMobileSearch) field.blur();

            window.setTimeout(() => {
                const rect = target.getBoundingClientRect();
                const headerBottom = document.getElementById('siteHeader').getBoundingClientRect().bottom;
                const viewportBottom = window.visualViewport?.height ?? window.innerHeight;
                const targetIsVisible = rect.top >= headerBottom && rect.bottom <= viewportBottom;
                if (!targetIsVisible) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, isMobileSearch ? 250 : 0);
        }

loadBusinesses();
