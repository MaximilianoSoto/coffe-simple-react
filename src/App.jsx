import { Card } from './Components/Card'

export const App = () => {
  return (
    <>
      <main>
        <img src='/assets/bg-cafe.jpg' alt='' />
        <div className='container'>
          <header>
            <h1>Our Collection</h1>
            <svg
              width='257'
              height='153'
              viewBox='0 0 257 153'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='header-img'
            >
              <path
                d='M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04'
                stroke='#302522'
                strokeWidth='3'
                strokeLinecap='round'
              />
            </svg>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees from different roast
              types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
            <div className='btn-flex'>
              <button> All Products</button>
              <button>Available Now</button>
            </div>
          </header>
          <div className='image-galleries'>
            <Card />
          </div>
        </div>
      </main>
    </>
  )
}
