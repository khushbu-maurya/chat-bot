// import AxiosServices from "../AxiosServices";

// const axiosServices = new AxiosServices;

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  // async findAnswer(question) {
  //   const answerResponse = await axiosServices.post('http://localhost:5000/findAnswer', { question: question })
  //   let answer = answerResponse.data.data;
  //   this.actionProvider.provideAnswer(answer);
  // }

  parse(message) {

    const lowercase = message.toLowerCase();

    // this.findAnswer(lowercase);

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
