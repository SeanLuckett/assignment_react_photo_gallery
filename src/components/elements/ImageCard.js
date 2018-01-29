import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

function filteredForLength(tags) {
  let filteredTags = [];

  tags.forEach((tag) => {
    if (tag.length <= 25) filteredTags.push(tag);
  });

  return filteredTags;
}

function toDate(secString) {
  let date = new Date();
  let epoch = parseInt(secString);
  if(epoch < 10000000000) epoch *= 1000; // convert to milliseconds

  date.setTime(epoch);
  return new Date(date);
}

const ImageCard = ({ thumbnail, imgLink, userName, filter, hashtags, postDate, likesCount, commentsCount }) => {
  const tags = filteredForLength(hashtags).join(', ');
  return (
    <Card>
      <Image
        src={thumbnail}
        as='a'
        href={imgLink}
      />

      <Card.Content>
        <Card.Header as='a'
                     href={`https://www.instagram.com/${userName}/`}>
          {userName}
        </Card.Header>
        <Card.Meta>
          <p className="date">
            Posted { toDate(postDate).toLocaleDateString() }
          </p>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p><strong>Filter:</strong> {filter}</p>
        <p><strong>Hashtags: </strong>
          {tags}
        </p>
      </Card.Content>
      <Card.Content extra>
        <p style={{ float: 'left' }}>
          <Icon name='comments'/>
          {commentsCount}
        </p>
        <p style={{ float: 'right' }}>
          <Icon name='like'/>
          {likesCount}
        </p>
      </Card.Content>
    </Card>
  );
};

export default ImageCard;