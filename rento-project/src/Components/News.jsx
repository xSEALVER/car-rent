import React, { useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './auth/Firebase';

const News = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    setError(null);
    setSuccess(false);

    try {
      const q = query(collection(db, 'newsletters'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('Vous êtes déjà inscrit à la newsletter.');
        return;
      }

      await addDoc(collection(db, 'newsletters'), {
        email,
        timestamp: new Date()
      });
      
      setSuccess(true);
      setEmail('');
    } catch (e) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white"
    data-aos="fade-up"
>
    <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg text-black shadow-lg">
      <h1 className="text-center text-2xl font-semibold mb-6"
                    data-aos="fade-left"

      >Newsletter</h1>
      <p className="text-center mb-4" data-aos="fade-up">
        Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Weboxing !
      </p>
  
      {error && (
        <div className="bg-red-500 text-white p-3 rounded mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-500 text-white p-3 rounded mb-4">
          Inscription réussie !
        </div>
      )}
  
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4"   >
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-200 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Entrez votre Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white p-3 rounded hover:opacity-70 transition duration-300"
        >
          Valider
        </button>
      </form>
    </div>
  </div>
  

  );
};

export default News;
