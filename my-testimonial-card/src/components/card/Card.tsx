import Header from '../Profile'
import TextSection from '../Paragraph'

function Card() {
  return (
    <div className='max-w-[600px] max-h-[600px] shadow-lg rounded-lg p-8 m-10 font-inter hover:cursor-pointer'>
        <Header />
        <TextSection />
    </div>
  )
}

export default Card