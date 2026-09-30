import MyButton from '@/components/MyButton';
import MyCard from '@/components/MyCard';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold'>Welcome to Homepage</h1>

      <p style={{ color: 'red', fontSize: 30, backgroundColor: 'yellow' }}>
        Using Inline CSS
      </p>
      <input type="text" />
      <hr />
      <br />

      <label htmlFor=""></label>

      <div className='grid grid-cols-3 gap-5'>
        <MyCard
          title={'Card title 1'}
          description={'card description 1'}
          btnText={'Submit'}
        />

        <MyCard
          title={'Card title 2'}
          description={'card description 2'}
          btnText={'Explore'}
        />
      </div>

      <MyButton disabled={true}>Submit</MyButton>
      <MyButton>Learn More</MyButton>
    </div>
  )
}

export default Home;