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
          response: `I hear you saying: "${message}". Could you share more details?`
        }
      };
    }
  }
];
