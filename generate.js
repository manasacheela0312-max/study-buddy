exports.handler = async (event) => {
    const { prompt } = JSON.parse(event.body);
  
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.4, max_tokens: 1500
      })
    });
  
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };