import React, {Component} from 'react';

import {Grid, Header, Card, Image} from 'semantic-ui-react';

import {instagramResponse} from '../photos';
import ImageCard from './elements/ImageCard';

const tempImgData = instagramResponse["data"][1];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid columns={1} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">React Photo Gallery</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <ImageCard thumbnail={tempImgData["images"]["thumbnail"]["url"]}
                             imgLink={tempImgData["link"]}
                             userName={tempImgData["user"]["username"]}
                             filter={tempImgData["filter"]}
                             hashtags={tempImgData["tags"]}
                             postDate={tempImgData["created_time"]}
                             likesCount={tempImgData["likes"]["count"]}
                             commentsCount={tempImgData["comments"]["count"]}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                      src='https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e35/11934634_844560522259226_320398962_n.jpg'/>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                      src='https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e35/11931191_1638017563150835_247280115_n.jpg'/>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                      src='https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e35/11934634_844560522259226_320398962_n.jpg'/>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Row>
        </Grid>


      </div>
    );
  }
}

export default App;
