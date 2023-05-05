import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
          <ol className='question-container'>
            <li>what is context API ?</li>
            <p>Ans: Context API is  a structure of React where as you can easily shared your data for your all components.It is worked by  prop drilling system ..You can't easily shared your data with props.</p>
            <li>what is custom hook in react ?</li>
            <p> Custom hook is a unique ,special features for your project,If you want to more attractive and interactive to your project ,You can easily done by using custome hook and also added certain features to your projects.</p>
            <li>what is use Ref ?</li>
            <p>Ans: useRef returns a immutable objects where you can pass initial value.you can not redenring and update your data by useRef methods.
         </p>
         <li>4.What is useMemo ?</li>
         <p>Ans: useMeo is a ract hook.You get the results of a calculations between rerenders data.When you changing or adding data,you will get a nnotince delay excution</p>

          </ol>
        </div>
    );
};

export default Blog;