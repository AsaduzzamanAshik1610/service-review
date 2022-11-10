import React from 'react';

const Blog = () => {
    return (
        <div className='bg-current mt-5'>
            <h2 className='text-2xl text-white'>1. Difference between SQL and NoSQL</h2>
            <p className='p-5 m-5 text-white'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.Whereas SQL is primarily used to query and operate database systems, MySQL enables you to store, handle, delete, and modify data in an organized way. As for NoSQL, it is a non-relational database that</p>
            <h1 className='text-2xl text-white'>2.What is JWT, and how does it work?</h1>
            <p className='p-5 m-5 text-white'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. Since it is a client-side </p>
            <h1 className='text-2xl text-white'>3.What is the difference between javascript and NodeJS?</h1>
            <p className='p-5 m-5 text-white'>1. NodeJS : 
              NodeJS is a cross-platform and opensource Javascript runtime environment  that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
              2. JavaScript : 
              Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype. 
              <h1 className='text-2xl mt-5 text-white'>4.How does NodeJS handle multiple requests at the same time?</h1> 
              <p className='p-5 m-5 text-white'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.I can not understand (yet) how it can be faster than a multi-threaded web server. I understand that multi-threaded web server will be more expensive in resources (memory, CPU), but would not it still be faster? I am probably wrong; please explain how this single-thread is faster in lots of requests, and what it typically does (in high level) when servicing lots of requests like 10,000.</p>
              </p>
        </div>
    );
};

export default Blog;