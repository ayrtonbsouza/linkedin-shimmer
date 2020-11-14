import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
} from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="write">
          <WriteIcon />
          <span>Começar uma publicação</span>
        </div>
        <div className="attachment">
          <button type="submit">
            <CameraIcon />
            Foto
          </button>
          <button type="submit">
            <VideoCameraIcon />
            Video
          </button>
          <button type="submit">
            <DocumentIcon />
            Documento
          </button>
          <button type="submit">
            <ArticleIcon />
            Escrever artigo
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
