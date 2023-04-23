import './Posts.css'
import {useState} from 'react'
import Nav from '../components/Nav'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Posts() {
    // const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [formData, setFormData] = useState ({
        // user_id: cookies.UserId,
        username: '',
        location: '',
        category: '',
        img: '',
        caption: ''
    })

    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log("submitted");
      
        try {
          const response = await axios.post("http://localhost:8000/posts", { formData });
          const success = response.status === 200;
          if (success) navigate("/$(category)");
        } catch (err) {
          console.log(err);
        }
      };
      

    function handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
 
        setFormData ((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData);

    return (
        <>
            <Nav 
                whitePage={true}
                setShowModal={() => {}}
                showModal={false}
            />
            <div className="posts">
                <h2>
                    MAKE A POST
                </h2>

                <form onSubmit={handleSubmit}>
                    <section>

                        <label htmlFor="username">Username</label>
                        <br />
                        <input 
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            required={true}
                            value={formData.username}
                            onChange={handleChange}
                        />

                        <br />
                        <br />

                        <label htmlFor="location">Location</label>
                        <br />
                        <input 
                            id="location"
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            required={true}
                            value={formData.location}
                            onChange={handleChange}
                        />
                        
                        <br />
                        <br />

                    </section>

                    <section>
                        <label htmlFor="about">Image (optional)</label>
                        <br />
                        <input
                            type="url"
                            name="img"
                            id="img"
                            onChange={handleChange}
                            required={true}
                        />

                        <div className="photo-container">
                         {formData.img &&   <img src={formData.img} alt="image preview"/>}
                        </div>

                        <br />
                        <label>Category</label>
                        <div className="multiple-input-container">
                            <input 
                                id="feed"
                                type="radio"
                                name="category"
                                value="Feed"
                                onChange={handleChange}
                                checked={formData.category === 'Feed'}
                            />
                            <label htmlFor="feed-category">Feed</label>
                            <br />
                            <input 
                                id="itinerary"
                                type="radio"
                                name="category"
                                value="Itinerary"
                                onChange={handleChange}
                                checked={formData.category === 'Itinerary'}
                            />
                            <label htmlFor="itinerary-category">Itinerary</label>
                            <br />
                            <input 
                                id="safety"
                                type="radio"
                                name="category"
                                value="Safety/Tips"
                                onChange={handleChange}
                                checked={formData.category === 'Safety/Tips'}
                            />
                            <label htmlFor="safety-category">Safety/Tips</label>
                        </div>

                        <br />
                        <label htmlFor="caption">Caption</label>
                        <br />
                        <input 
                            id="caption"
                            type="text"
                            name="caption"
                            placeholder="Enter your description here"
                            required={true}
                            value={formData.caption}
                            onChange={handleChange}
                        />
                        <br />
                        <div className='submit'>
                            <br />
                            <input type="submit"/>
                        </div>
                    </section>

                </form>

            </div>
        </>
    );
}

export default Posts;