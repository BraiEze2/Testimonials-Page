import './App.css';
import Testimonio from './componentes/Testimonio'
import Form from './componentes/Form'


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>

        <h1>Estas son algunos de nuestros alumnos con sus testimonios.</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quis odio commodi accusantium eum repudiandae facilis reiciendis officiis architecto, eligendi error quos esse unde! Accusamus officiis ad id quis voluptas orem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quis odio commodi accusantium eum repudiandae facilis reiciendis officiis architecto'
        />
        <Testimonio 
          nombre='Sarah Chima'
            pais='Nigeria'
            imagen='sarah'
            cargo='Ingeniera de Software'
            empresa='ChatDesk'
            testimonio='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quis odio commodi accusantium eum repudiandae facilis reiciendis officiis architecto, eligendi error quos esse unde! Accusamus officiis ad id quis voluptas.'
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quis odio commodi accusantium eum repudiandae facilis reiciendis officiis architecto, eligendi error quos esse unde! Accusamus officiis ad id quis voluptas.'
        />
        
        <Form />

      </div>


    </div>
  );
}

export default App;
