import React from 'react';
import Grid from '@material-ui/core/Grid';



function AboutUs() {
  return (
    <div>
     
       <Grid container>
          <Grid item xs={3}>
            </Grid>
            <Grid item xs={6} spacing={5}>
                <h2 >Who are we?</h2>
                <p>Started in 2020, Lebanese Services is an online platform that connects employers and freelancers. Our main objective is to create more opportunities for the Lebanese people to help them get through these hard times. With over 15 services offered right now, you can be guaranteed to find the adequate person for the service you are looking for.</p>
                <p>KhedniMa3ak is a startup started by Geoffry Abi Farah, Marven Abou Chehadé, and Victor Hajjar with the objective of becoming leader in the online services in Lebanon and MENA region.</p>
           <br/>
           <br/>
           <br/>
           <br/>
            </Grid>
            <Grid >
             
           
    
            </Grid>
        </Grid>
       
        <Grid container>
            <Grid item xs={4} spacing={1}>
               <img class="img-fluide co-founders-imgs mb-2" src="place-images/geoffry.png" width="30%" height="auto"></img><br/>
              <label>Geoffry Abi Farah</label>
            </Grid>
            <Grid item xs={4} spacing={1}>
            <img class="img-fluide co-founders-imgs mb-2" src="place-images/marven.png" width="30%" height="auto"></img><br/>
              <label>Marven Abou Chehadé</label>
              </Grid>

              <Grid item xs={4} spacing={1}>
              <img class="img-fluide co-founders-imgs mb-2" src="place-images/victor.png" width="30%" height="auto"></img><br/>
              <label>Victor Hajjar</label>
              </Grid>
      
             
          </Grid>
        
         


       
    


         
    
      
    </div>

  );
}

export default AboutUs;