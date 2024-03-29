import React from "react";

const commentsData = [
  {
    name: "Aman Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
    replies: [
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [
              {
                name: "Aman Kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
                replies: [
                  {
                    name: "Aman Kumar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
                    replies: [
                      {
                        name: "Aman Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aman Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
    replies: [
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
        ],
      },
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [],
      },
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aman Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
    replies: [],
  },
  {
    name: "Aman Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
    replies: [
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aman Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
    replies: [
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [],
      },
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [],
      },
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
          {
            name: "Aman Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aman Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
    replies: [
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [],
      },
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [],
      },
      {
        name: "Aman Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!",
        replies: [],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm p-2 bg-gray-200 rounded-lg my-2">
      <img
        className="h-12 w-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}:</p>
        <p>{text}:</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5 ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:-</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
