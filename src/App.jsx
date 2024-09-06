import testimonials from './data/testimonials.json'
import Card from './ui/Card'

function App() {
  return (
    <section className='page'>
      <h1 className='hidden'>Responsive Testimonial Grid- Made By Keiner Mendoza</h1>

      <div className='grid-layout'>
        {testimonials.map(testimonial => (
          <Card
            key={testimonial.id} 
            name={testimonial.name}
            img={testimonial.img}
            testimonial={testimonial.testimonial}
            quote={testimonial.quote}
            selector={testimonial.selector}
            status={testimonial.status}
            hasBgQuote={testimonial.hasBgQuote}
          />
        )
        )}
      </div>
    </section>
  )
}

export default App
