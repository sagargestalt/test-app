export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 0,
          title: 'Students',
          type: "profiles",
        },
        {
          id: 2,
          title: "Average Markes",
          type: "calculation",
          line1: 6.8
        }
      ])
 
  })
}