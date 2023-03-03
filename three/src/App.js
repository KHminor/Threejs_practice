import { Canvas } from '@react-three/fiber';

import Bunny from './component/Bunny';
import Chick from './component/Chick';
import Pang from './component/Pang';
import Rabbit from './component/Rabbit';
import Raccoon from './component/Raccoon';
import Unicorn from './component/Unicorn';

function App() {
  return (
    <div className="App">
      <div className='h-screen w-screen'>
          {/* <Raccoon/> */}
          {/* <Bunny/> */}
          {/* <Rabbit/> */}
          {/* <Pang/> */}
          {/* <Unicorn/> */}
          <Chick/>
      </div>
    </div>
  );
}

export default App;
