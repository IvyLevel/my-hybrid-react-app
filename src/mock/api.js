// src/mock/api.js
export default [
    {
      url: '/api/converse',
      method: 'post',
      response: ({ body }) => {
        const { message } = body;
        return {
          code: 200,
          data: {
            // Simulate a response based on the input message
            response: `I hear you saying: "${message}". Could you share more details?`
          }
        };
      }
    }
  ];
  