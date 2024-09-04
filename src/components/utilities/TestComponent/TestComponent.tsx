import React, { useEffect, useState } from 'react';
import { get, ApiError } from 'aws-amplify/api'; // Importamos `get` y `ApiError` de `aws-amplify/api`

const TestComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('Cargando...');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const callLambdaFunction = async () => {
    try {
      // Configura la llamada GET con apiName y path
      const restOperation = get({
        apiName: 'portfolioapi',  // Reemplaza con el nombre de tu API
        path: '/todo',        // Reemplaza con la ruta correcta de tu API
        // options: {
        //   queryParams: {
        //     id: '123',  // Ejemplo de cómo pasar parámetros de consulta (opcional)
        //   }
        // }
      });

      // Consumir la respuesta como JSON
      const response = await restOperation.response;
      const jsonResponse = await response.body.json(); // Si el contenido es JSON

      // Actualiza el estado con la respuesta
      setMessage(`GET call succeeded: ${JSON.stringify(jsonResponse)}`);

    } catch (error) {
      console.log('ERROR en la llamada a la api');
      
      // Manejo de errores usando ApiError
      if (error instanceof ApiError) {
          console.log('An unexpected error occurred AQUI');
          console.error(`The error is: ${error}`);
      } else {
        console.error('GET call failed AQUI:', error);
        console.log('An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    callLambdaFunction(); // Llama a la función Lambda cuando el componente se monte
  }, []);

  return (
    <>
      <h1>TEST COMPONENT</h1>
      <p>Error?: {errorMessage}</p>
      <p>Respuesta desde Lambda: {message}</p>
      
    </>
  );
};

export default TestComponent;
