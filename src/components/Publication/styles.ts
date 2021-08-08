import styled from "styled-components";
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { Stopwatch } from '@styled-icons/bootstrap/Stopwatch';
import { HandbagFill } from '@styled-icons/bootstrap/HandbagFill';
import { ThumbLike } from '@styled-icons/fluentui-system-regular/ThumbLike';
import { CommentDots } from '@styled-icons/fa-regular/CommentDots';
import { Share } from '@styled-icons/icomoon/Share';


export const Container = styled.div`
  grid-area: 'CC';
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--white);
  border-radius: 1rem;
  margin-top: 1.5rem;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .header-content {
    display: flex;
    gap: 0.5rem;

    span {
      color: var(--background-card-profile);
      font-weight: bold;
    }
  }

  .header-content-info {
    display: flex;
    gap: 0.5rem;

    small {
      font-size: 0.9rem;
      color: var(--gray-200);
    }

    .header-content-watche {
      display: flex;
      align-items: center;
    }

    .header-content-privacy {
      display: flex;
      align-items: center;
    }
  }

  .msg-security {
    margin-top: 1rem;
    color: var(--gray-200);
  }

  .information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    position: relative;
    color: var(--gray-200);

    .information-like {
      display: flex;
      align-items: center;

      small {
        font-size: 0.9rem;
      }
    }

    span {
      font-size: 0.9rem;

      & + span {
        margin-left: 0.5rem;
      }
    }

    &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    margin-top: 0.5rem;
    border-radius: 3px 3px 0 0;
    bottom: -5px;
    background: var(--gray-100);
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    position: relative;
    padding: 1rem;

    button {
      width: 100%;
      height: 2.5rem;
      border-radius: 2rem;
      cursor: pointer;
    }

    &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    margin-top: 0.5rem;
    border-radius: 3px 3px 0 0;
    bottom: 5px;
    background: var(--gray-100);
    }
  }
`;

export const ArrowDown = styled(ArrowIosDownwardOutline)`
  width: 1.75rem;
  height: 1.75rem;
  color: var(--black-100);
  cursor: pointer;
`;

export const Watche = styled(Stopwatch)`
  width: 1rem;
  height: 1rem;
  color: var(--gray-200);
  margin-right: 0.5rem;
`;

export const Handbag = styled(HandbagFill)`
  width: 1rem;
  height: 1rem;
  color: var(--gray-200);
  margin-right: 0.5rem;
`;

export const Like = styled(ThumbLike)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--gray-200);
  margin-right: 0.2rem;
  cursor: pointer;
`;

export const Comment = styled(CommentDots)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--gray-200);
  margin-right: 0.2rem;
`;

export const Shared = styled(Share)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--gray-200);
  margin-right: 0.2rem;
`;

export const ImgProfilePublication = styled.div`
  display: flex;
  align-items: center;
  border: 4px solid var(--blue-400);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;

  img {
    border: 2px solid var(--white);
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }
`;
