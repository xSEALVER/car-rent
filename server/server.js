// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// app.use(express.json());
// app.use(cors());

// // // debut MySQL CRUD
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydatabase"
// });

// db.connect(err => {
//     if (err) {
//         console.error("Error connecting to the database:", err);
//         return;
//     }
//     console.log("Connected to the database.");
// });

// app.get("/", (req, res) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.post('/create', (req, res) => {
//     const sql = "INSERT INTO users (Name, Email) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email
//     ];
//     db.query(sql, [values], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.put('/update/:id', (req, res) => {
//     const sql = "UPDATE users SET `Name` = ?, `Email` = ? WHERE ID = ?";
//     const values = [
//         req.body.name,
//         req.body.email
//     ];

//     const id = req.params.id;

//     db.query(sql, [...values, id], (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.json("Error");
//         }
//         console.log('Update result:', data);
//         return res.json(data);
//     });
// });

// app.delete('/reservation/:id', (req, res) => {
//     const sql = "DELETE FROM users WHERE ID = ?";
//     const id = req.params.id;

//     db.query(sql, [id], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.listen(8081, () => {
//     console.log("listening on port 8");
// });

// // fin MySQL CRUD


const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');



app.use(cors()); // Enable CORS for all routes


app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'rento'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});



// app.post('/signup', async (req, res) => {
//     const { name, email, phone, password } = req.body;

//     // Log the incoming request data for debugging
//     console.log('Received data on backend:', { name, email, phone, password });

//     try {
//         const query = 'INSERT INTO clients (nom_clients, email_clients, telephone_clients, mot_de_passe_clients) VALUES (?, ?, ?, ?)';
//         db.query(query, [name, email, phone, password], (err, result) => {
//             if (err) {
//                 console.error('Error inserting data:', err);
//                 res.status(500).send('Error inserting data');
//                 return;
//             }
//             res.status(200).send('Data inserted successfully');
//         });
//     } catch (error) {
//         console.error('Error processing request:', error);
//         res.status(500).send('Error processing request');
//     }
// });

// app.post('/signup', async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   // Log the incoming request data for debugging
//   console.log('Received data on backend:', { name, email, phone, password });

//   try {
//       const query = 'INSERT INTO clients (nom_clients, email_clients, telephone_clients, mot_de_passe_clients) VALUES (?, ?, ?, ?)';
//       db.query(query, [name, email, phone, password], (err, result) => {
//           if (err) {
//               console.error('Error inserting data:', err);
//               res.status(500).send('Error inserting data');
//               return;
//           }

//           // After successful insertion, send back the name and email to the frontend
//           res.status(200).json({ name, email });  // Send name and email as JSON
//       });
//   } catch (error) {
//       console.error('Error processing request:', error);
//       res.status(500).send('Error processing request');
//   }
// });

// app.post('/signup', async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   // Log the incoming request data for debugging
//   console.log('Received data on backend:', { name, email, phone, password });

//   try {
//       const query = 'INSERT INTO clients (nom_clients, email_clients, telephone_clients, mot_de_passe_clients) VALUES (?, ?, ?, ?)';
//       db.query(query, [name, email, phone, password], (err, result) => {
//           if (err) {
//               console.error('Error inserting data:', err);
//               res.status(500).send('Error inserting data');
//               return;
//           }

//           const insertedId = result.insertId; // Get the inserted ID (id_clients)
//           console.log('Inserted Client ID:', insertedId);

//           // After successful insertion, send back the name, email, and id_clients to the frontend
//           res.status(200).json({ id_clients: insertedId, name, email });  // Send id_clients, name, and email as JSON
//       });
//   } catch (error) {
//       console.error('Error processing request:', error);
//       res.status(500).send('Error processing request');
//   }
// });

app.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Log the incoming request data for debugging
  console.log('Received signup data:', { name, email, phone, password });

  try {
      const query = 'INSERT INTO clients (nom_clients, email_clients, telephone_clients, mot_de_passe_clients) VALUES (?, ?, ?, ?)';
      db.query(query, [name, email, phone, password], (err, result) => {
          if (err) {
              console.error('Error inserting data:', err);
              res.status(500).send('Error inserting data');
              return;
          }

          const insertedId = result.insertId; // Get the newly inserted id_clients
          console.log('Inserted Client ID:', insertedId);

          // After successful insertion, send back id_clients, name, and email to the frontend
          res.status(200).json({
              id_clients: insertedId,  // Send back the id_clients
              name,                     // Send back the name
              email                     // Send back the email
          });
      });
  } catch (error) {
      console.error('Error processing signup:', error);
      res.status(500).send('Error processing signup');
  }
});





  

// app.post('/signin', (req, res) => {
//     const { email, password } = req.body; // Expect both email and password
//     const query = 'SELECT * FROM clients WHERE email_clients = ?';

//     db.query(query, [email], (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).send('Error fetching data');
//             return;
//         }

//         if (results.length === 0 || results[0].mot_de_passe_clients !== password) {
//             res.status(401).send('Invalid email or password');
//             return;
//         }

//         res.status(200).send('Login successful');
//     });
// });

// app.post('/signin', (req, res) => {
//   const { email, password } = req.body; // Expect both email and password
//   const query = 'SELECT * FROM clients WHERE email_clients = ?';

//   db.query(query, [email], (err, results) => {
//       if (err) {
//           console.error('Error fetching data:', err);
//           res.status(500).send('Error fetching data');
//           return;
//       }

//       // If no user found or password is incorrect
//       if (results.length === 0 || results[0].mot_de_passe_clients !== password) {
//           res.status(401).send('Invalid email or password');
//           return;
//       }

//       // If login is successful, send back user data (e.g., name and email)
//       const user = results[0]; // Assuming results[0] contains the user row
//       res.status(200).json({
//           name: user.nom_clients,  // Assuming `nom_clients` is the user's name
//           email: user.email_clients // Send email back as well
//       });
//   });
// });

// app.post('/signin', (req, res) => {
//   const { email, password } = req.body; // Expect both email and password
//   const query = 'SELECT * FROM clients WHERE email_clients = ?';

//   db.query(query, [email], (err, results) => {
//       if (err) {
//           console.error('Error fetching data:', err);
//           res.status(500).send('Error fetching data');
//           return;
//       }

//       // If no user found or password is incorrect
//       if (results.length === 0 || results[0].mot_de_passe_clients !== password) {
//           res.status(401).send('Invalid email or password');
//           return;
//       }

//       // If login is successful, send back user data (e.g., name, email, and id_clients)
//       const user = results[0]; // Assuming results[0] contains the user row
//       res.status(200).json({
//           id_clients: user.id_clients,  // Include the client ID
//           name: user.nom_clients,        // Assuming `nom_clients` is the user's name
//           email: user.email_clients      // Send email back as well
//       });
//   });
// });

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM clients WHERE email_clients = ?';
  
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
            return;
        }
  
        if (results.length === 0 || results[0].mot_de_passe_clients !== password) {
            res.status(401).send('Invalid email or password');
            return;
        }
  
        const user = results[0];
        res.status(200).json({
            id_clients: user.id_clients,
            name: user.nom_clients,
            email: user.email_clients,
            role: user.role_clients // Include the user's role
        });
    });
  });
  

// app.get('/carlist', (req, res)=>{
//     const q = "SELECT * FROM vehicules"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//             return res.json(data)
//     })
// })

app.get('/carlist', (req, res) => {
    const { type, marque } = req.query;
    
    let q = "SELECT * FROM vehicules WHERE 1=1";
    
    if (type) {
      q += ` AND type_vehicules = '${type}'`;
    }
    
    if (marque) {
      q += ` AND marque_vehicules = '${marque}'`;
    }
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });


//   app.post('/addReservation', (req, res) => {
//     const { id_vehicules, id_clients, id_agence, date_reservation, date_fin_reservation } = req.body;

//     // Validate that id_clients is provided
//     if (!id_clients) {
//         return res.status(400).json("id_clients is required for making a reservation");
//     }

//     const q = "INSERT INTO reservation (id_vehicules, id_clients, id_agence, date_reservation, date_fin_reservation) VALUES (?, ?, ?, ?, ?)";

//     db.query(q, [id_vehicules, id_clients, id_agence, date_reservation, date_fin_reservation], (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.status(200).json("Reservation added successfully");
//     });
// });


app.post('/addReservation', (req, res) => {
  const { id_vehicules, id_clients, id_agence, date_reservation, date_fin_reservation } = req.body;

  // Validate that id_clients and id_vehicules are provided
  if (!id_clients || !id_vehicules) {
      return res.status(400).json("id_clients and id_vehicules are required for making a reservation");
  }

  // Insert the reservation and get the last inserted id
  const insertReservationQuery = `
      INSERT INTO reservation (id_vehicules, id_clients, id_agence, date_reservation, date_fin_reservation) 
      VALUES (?, ?, ?, ?, ?)
  `;

  db.query(insertReservationQuery, [id_vehicules, id_clients, id_agence, date_reservation, date_fin_reservation], 
      (err, data) => {
          if (err) {
              console.error('Error inserting reservation:', err);
              return res.status(500).json('Error inserting reservation');
          }

          // Get the last inserted id_reservation
          const reservationId = data.insertId;
          console.log('New Reservation ID:', reservationId); // Log for debugging

          // Update the clients table with the new reservation id
          const updateClientsQuery = `
              UPDATE clients 
              SET id_reservation = ? 
              WHERE id_clients = ?
          `;

          db.query(updateClientsQuery, [reservationId, id_clients], (err, data) => {
              if (err) {
                  console.error('Error updating clients with reservation ID:', err);
                  return res.status(500).json('Error updating clients');
              }

              // Also update the vehicules table to link the reservation
              const updateVehiculesQuery = `
                  UPDATE vehicules 
                  SET id_reservation = ? 
                  WHERE id_vehicules = ?
              `;

              db.query(updateVehiculesQuery, [reservationId, id_vehicules], (err, data) => {
                  if (err) {
                      console.error('Error updating vehicules with reservation ID:', err);
                      return res.status(500).json('Error updating vehicules');
                  }

                  return res.status(200).json('Reservation added, client and vehicle updated successfully');
              });
          });
      }
  );
});


//   app.get('/reservation', (req, res) => {
//     const q = "SELECT * FROM reservation";
//     db.query(q, (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.json(data);
//     });
//   });

//   app.get('/reservationAdmin', (req, res) => {
//     const q = "SELECT * FROM reservation";
//     db.query(q, (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.json(data);
//     });
//   });

app.get('/reservationAdmin', (req, res) => {
    const q = `
      SELECT r.id_reservation, 
             c.nom_clients, c.email_clients,
             v.type_vehicules, v.modele_vehicules, v.image_url, v.prix_vehicules
      FROM reservation r
      JOIN clients c ON r.id_clients = c.id_clients
      JOIN vehicules v ON r.id_vehicules = v.id_vehicules
    `;
  
    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
  


app.get('/reservation', (req, res) => {
    const q = `
      SELECT r.*, v.type_vehicules, v.modele_vehicules, v.image_url, v.prix_vehicules
      FROM reservation r
      JOIN vehicules v ON r.id_vehicules = v.id_vehicules
    `;
  
    db.query(q, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(data);
    });
  });

  app.get("/", (req, res) => {
    const sql = "SELECT * FROM clients";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

// app.post('/create', (req, res) => {
//     const sql = "INSERT INTO clients (id_clients, nom_clients, telephone_clients, email_clients, mot_de_passe_clients) VALUES (?,?,?,?,?)";
//     const values = [
//         req.body.name,
//         req.body.email
//     ];
//     db.query(sql, [values], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.post('/create', (req, res) => {
//     const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = req.body;

//     // Query pour insérer le client si nécessaire
//     const insertClientQuery = `
//         INSERT INTO clients (nom_clients, email_clients)
//         VALUES (?, ?)
//         ON DUPLICATE KEY UPDATE id_clients=LAST_INSERT_ID(id_clients)
//     `;

//     // Exécute la requête d'insertion de client et récupère l'ID du client inséré
//     db.query(insertClientQuery, [nom_clients, email_clients], (err, clientResult) => {
//         if (err) return res.status(500).json(err);

//         const id_clients = clientResult.insertId; // Récupère l'ID du client

//         // Query pour insérer la réservation
//         const insertReservationQuery = `
//             INSERT INTO reservation (id_clients, id_vehicules, date_reservation, date_fin_reservation)
//             VALUES (?, ?, ?, ?)
//         `;

//         db.query(insertReservationQuery, [id_clients, id_vehicules, date_reservation, date_fin_reservation], (err, reservationResult) => {
//             if (err) return res.status(500).json(err);
//             return res.status(201).json({ message: 'Réservation créée avec succès' });
//         });
//     });
// });

// app.post('/create', (req, res) => {
//     const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = req.body;

//     // Query pour insérer le client si nécessaire
//     const insertClientQuery = `
//         INSERT INTO clients (nom_clients, email_clients)
//         VALUES (?, ?)
//         ON DUPLICATE KEY UPDATE id_clients=LAST_INSERT_ID(id_clients)
//     `;

//     db.query(insertClientQuery, [nom_clients, email_clients], (err, clientResult) => {
//         if (err) return res.status(500).json(err);

//         const id_clients = clientResult.insertId; // Récupère l'ID du client

//         // Requête pour obtenir l'ID de l'agence à partir de l'ID du véhicule
//         const getAgencyIdQuery = `
//             SELECT id_agence FROM vehicules WHERE id_vehicules = ?
//         `;

//         db.query(getAgencyIdQuery, [id_vehicules], (err, agencyResult) => {
//             if (err) return res.status(500).json(err);

//             const id_agence = agencyResult[0]?.id_agence;

//             if (!id_agence) {
//                 return res.status(404).json({ message: "Agence non trouvée pour ce véhicule" });
//             }

//             // Query pour insérer la réservation
//             const insertReservationQuery = `
//                 INSERT INTO reservation (id_clients, id_vehicules, id_agence, date_reservation, date_fin_reservation)
//                 VALUES (?, ?, ?, ?, ?)
//             `;

//             db.query(insertReservationQuery, [id_clients, id_vehicules, id_agence, date_reservation, date_fin_reservation], (err, reservationResult) => {
//                 if (err) return res.status(500).json(err);
//                 return res.status(201).json({ message: 'Réservation créée avec succès' });
//             });
//         });
//     });
// });

// app.post('/create', (req, res) => {
//     const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = req.body;

//     // Query pour insérer le client si nécessaire
//     const insertClientQuery = `
//         INSERT INTO clients (nom_clients, email_clients)
//         VALUES (?, ?)
//         ON DUPLICATE KEY UPDATE id_clients=LAST_INSERT_ID(id_clients)
//     `;

//     db.query(insertClientQuery, [nom_clients, email_clients], (err, clientResult) => {
//         if (err) return res.status(500).json(err);

//         const id_clients = clientResult.insertId; // Récupère l'ID du client

//         // Requête pour obtenir l'ID de l'agence à partir de l'ID du véhicule
//         const getAgencyIdQuery = `
//             SELECT id_agence FROM vehicules WHERE id_vehicules = ?
//         `;

//         db.query(getAgencyIdQuery, [id_vehicules], (err, agencyResult) => {
//             if (err) return res.status(500).json(err);

//             const id_agence = agencyResult[0]?.id_agence;

//             if (!id_agence) {
//                 return res.status(404).json({ message: "Agence non trouvée pour ce véhicule" });
//             }

//             // Query pour insérer la réservation sans spécifier `id_reservation`
//             const insertReservationQuery = `
//                 INSERT INTO reservation (id_clients, id_vehicules, id_agence, date_reservation, date_fin_reservation)
//                 VALUES (?, ?, ?, ?, ?)
//             `;

//             db.query(insertReservationQuery, [id_clients, id_vehicules, id_agence, date_reservation, date_fin_reservation], (err, reservationResult) => {
//                 if (err) return res.status(500).json(err);

//                 const id_reservation = reservationResult.insertId;

//                 // Mettre à jour la table `clients` avec l'id_reservation en tant que clé étrangère
//                 const updateClientQuery = `
//                     UPDATE clients SET id_reservation = ? WHERE id_clients = ?
//                 `;

//                 db.query(updateClientQuery, [id_reservation, id_clients], (err, updateResult) => {
//                     if (err) return res.status(500).json(err);

//                     return res.status(201).json({ 
//                         message: 'Réservation créée et client mis à jour avec succès',
//                         id_reservation: id_reservation 
//                     });
//                 });
//             });
//         });
//     });
// });

app.post('/create', (req, res) => {
    const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = req.body;

    // Query pour insérer le client si nécessaire
    const insertClientQuery = `
        INSERT INTO clients (nom_clients, email_clients)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE id_clients=LAST_INSERT_ID(id_clients)
    `;

    db.query(insertClientQuery, [nom_clients, email_clients], (err, clientResult) => {
        if (err) return res.status(500).json(err);

        const id_clients = clientResult.insertId; // Récupère l'ID du client

        // Requête pour obtenir le prix du véhicule et l'ID de l'agence
        const getVehicleQuery = `
            SELECT prix_vehicules, id_agence FROM vehicules WHERE id_vehicules = ?
        `;

        db.query(getVehicleQuery, [id_vehicules], (err, vehicleResult) => {
            if (err) return res.status(500).json(err);

            if (vehicleResult.length === 0) {
                return res.status(404).json({ message: "Véhicule non trouvé" });
            }

            const prix_vehicule = vehicleResult[0].prix_vehicules;
            const id_agence = vehicleResult[0].id_agence;

            // Calculer le nombre de jours de réservation
            const startDate = new Date(date_reservation);
            const endDate = new Date(date_fin_reservation);
            const timeDifference = endDate - startDate; // Différence en millisecondes
            const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convertir en jours

            if (daysDifference <= 0) {
                return res.status(400).json({ message: "La date de fin de réservation doit être supérieure à la date de début." });
            }

            // Calculer le prix total
            const prix_total = prix_vehicule * daysDifference * 2; // Multiplier par 2

            // Query pour insérer la réservation avec le prix total
            const insertReservationQuery = `
                INSERT INTO reservation (id_clients, id_vehicules, id_agence, date_reservation, date_fin_reservation, prix_total)
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            db.query(insertReservationQuery, [id_clients, id_vehicules, id_agence, date_reservation, date_fin_reservation, prix_total], (err, reservationResult) => {
                if (err) return res.status(500).json(err);

                const id_reservation = reservationResult.insertId;

                // Mettre à jour la table `clients` avec l'id_reservation en tant que clé étrangère
                const updateClientQuery = `
                    UPDATE clients SET id_reservation = ? WHERE id_clients = ?
                `;

                db.query(updateClientQuery, [id_reservation, id_clients], (err, updateResult) => {
                    if (err) return res.status(500).json(err);

                    return res.status(201).json({ 
                        message: 'Réservation créée avec succès, prix total calculé',
                        id_reservation: id_reservation,
                        prix_total: prix_total 
                    });
                });
            });
        });
    });
});



// app.put('/update/:id', (req, res) => {
//     const sql = "UPDATE users SET `Name` = ?, `Email` = ? WHERE ID = ?";
//     const values = [
//         req.body.name,
//         req.body.email
//     ];

//     const id = req.params.id;

//     db.query(sql, [...values, id], (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.json("Error");
//         }
//         console.log('Update result:', data);
//         return res.json(data);
//     });
// });



app.put('/update/:id', (req, res) => {
    const { id } = req.params; // ID de la réservation à mettre à jour
    const { nom_clients, email_clients, id_vehicules, date_reservation, date_fin_reservation } = req.body;

    // Query pour mettre à jour le client
    const updateClientQuery = `
        UPDATE clients 
        SET nom_clients = ?, email_clients = ? 
        WHERE id_clients = (SELECT id_clients FROM reservation WHERE id_reservation = ?)
    `;

    db.query(updateClientQuery, [nom_clients, email_clients, id], (err) => {
        if (err) return res.status(500).json(err);

        // Requête pour obtenir l'ID de l'agence (optionnel)
        const getVehicleQuery = `
            SELECT id_agence FROM vehicules WHERE id_vehicules = ?
        `;

        db.query(getVehicleQuery, [id_vehicules], (err, vehicleResult) => {
            if (err) return res.status(500).json(err);

            if (vehicleResult.length === 0) {
                return res.status(404).json({ message: "Véhicule non trouvé" });
            }

            // Calculer le nombre de jours de réservation
            const startDate = new Date(date_reservation);
            const endDate = new Date(date_fin_reservation);
            const timeDifference = endDate - startDate; // Différence en millisecondes
            const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convertir en jours

            if (daysDifference <= 0) {
                return res.status(400).json({ message: "La date de fin de réservation doit être supérieure à la date de début." });
            }

            // Query pour mettre à jour la réservation
            const updateReservationQuery = `
                UPDATE reservation 
                SET id_vehicules = ?, date_reservation = ?, date_fin_reservation = ?
                WHERE id_reservation = ?
            `;

            db.query(updateReservationQuery, [id_vehicules, date_reservation, date_fin_reservation, id], (err) => {
                if (err) return res.status(500).json(err);

                return res.status(200).json({ 
                    message: 'Réservation mise à jour avec succès'
                });
            });
        });
    });
});



app.delete('/delete/:id', (req, res) => {
    const { id } = req.params; // ID de la réservation à supprimer

    // Requête pour supprimer la réservation
    const deleteReservationQuery = `
        DELETE FROM reservation 
        WHERE id_reservation = ?
    `;

    db.query(deleteReservationQuery, [id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la réservation:', err);
            return res.status(500).json({ message: 'Erreur lors de la suppression de la réservation' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Réservation non trouvée" });
        }

        return res.status(200).json({ message: 'Réservation supprimée avec succès' });
    });
});


  const PORT = 8081;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
  

// const bcrypt = require('bcrypt'); // Make sure to install bcrypt

// app.post('/signin', (req, res) => {
//     const { email, password } = req.body; // Get both email and password from the request body
//     const query = 'SELECT * FROM clients WHERE email_clients = ?'; // Make sure to use the correct column name
//     db.query(query, [email], (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).send('Error fetching data');
//             return;
//         }
//         if (results.length === 0) {
//             res.status(401).send('Invalid email');
//             return;
//         }

//         // Assuming your clients table has a column called 'mot_de_passe_clients' for the hashed password
//         const user = results[0];
//         bcrypt.compare(password, user.mot_de_passe_clients, (err, match) => {
//             if (err) {
//                 console.error('Error comparing passwords:', err);
//                 res.status(500).send('Error comparing passwords');
//                 return;
//             }
//             if (!match) {
//                 res.status(401).send('Invalid password');
//                 return;
//             }
//             res.status(200).send('Login successful');
//         });
//     });
// });




// fin code inscription/connexion avec une base de donees MySql


        // Hachage du mot de passe
        // bcrypt.hash(password, 10, (hashErr, hash) => {
        //     if (hashErr) {
        //         console.error("Error hashing password:", hashErr);
        //         return res.status(500).json({ error: "Error hashing password" });
        //     }

            // Insertion des données dans la base





// server.js

