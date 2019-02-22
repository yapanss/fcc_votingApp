export interface Poll {
  title: string,
  description: string,
  author: string,
  voters: Array<string>,
  topics: [{
    title: string,
    votes: number
  }]
}

