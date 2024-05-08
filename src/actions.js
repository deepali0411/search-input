export const getData = () => (
   fetch("https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err))
);
