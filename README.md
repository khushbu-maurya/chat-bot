chat-bot

How to add new quastions and optoins ?

1) You need to add a options in - src/components/Options.js ,
      add new option in options const array
      
      ![image](https://user-images.githubusercontent.com/47963824/187420319-344c55c5-a324-4f6d-a0d7-9fcfa3b9b267.png)


2) Now add thid option in a options array of config file - src/chatbot/config.js
       add new option in options const array

      ![image](https://user-images.githubusercontent.com/47963824/187420655-87020b72-e48c-4907-a5dc-d675658ff531.png)


3) Then you need to create a action controller for perticular option in - src/chatbot/ActionProvider.js

      create action like this

      ![image](https://user-images.githubusercontent.com/47963824/187420811-08725c70-b367-4365-86e2-6e83278b4ca7.png)

