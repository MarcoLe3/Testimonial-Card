import Header from '../Profile'
import TextSection from '../Paragraph'

function Card() {
  return (
    <div className='max-w-[600px] max-h-[600px] shadow-lg rounded-lg p-10 m-10'>
        <Header />
        <TextSection />
    </div>
  )
}

export default Card