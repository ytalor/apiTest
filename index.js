exports.handler = async (event) => {
  console.log('event: %j', event);

  if (event.path === '/admin') {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 200, message: 'Tudo OK!' }),
    };
  }

  const response = {
    statusCode: 500,
    body: JSON.stringify({ status: 500, message: 'Internal server error' }),
  };
  return response;
};
