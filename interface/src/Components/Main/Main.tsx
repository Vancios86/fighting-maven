import './Main.css';

const Main = () => {
  return (
    <div className='main-display'>
      <div className='next-event'>
        <h3>Next event</h3>
        <div className='next-event-container'>
          <div className='main-event'></div>
          <div className='co-main-event'></div>
          <div className='fight1'></div>
          <div className='fight2'></div>
          <div className='fight3'></div>
        </div>
      </div>
      <div className='previous-event'>
        <h3>Previous event</h3>
        <div className='previous-event-container'>
          <div className='main-event'></div>
          <div className='co-main-event'></div>
          <div className='fight1'></div>
          <div className='fight2'></div>
          <div className='fight3'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
