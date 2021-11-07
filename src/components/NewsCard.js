import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import newsStyles from "../styles/newsStyles";
import { Fragment } from "react";

const AllNewsJSON = {
  status: "ok",
  articles: [
    {
      id: 1,
      title: "Egyptian Sports Industry",
      description: "",
      urlToImage:
        "https://mediaaws.almasryalyoum.com/news/large/2020/02/29/1032245_0.jpg",
      publishedAt: "2020-09-14T07:54:00Z",
      content:
        "qui qui deserunt expedita at\nprovident sequi veritatis sit qui nam tempora mollitia ratione\ncorporis vitae rerum pariatur unde deleniti ut eos ad\naut non quae nisi saepe",
    },
    {
      id: 2,
      title: "nesciunt numquam alias doloremque minus ipsam optio",
      description: "",
      urlToImage:
        "https://media.gemini.media/img/yallakora/Normal//2020/8/10/117779124-951373455382938-8501124279619968210-n2020_8_10_18_51.jpg",
      publishedAt: "2020-09-14T08:45:36Z",
      content:
        "eos hic deserunt necessitatibus sed iciatis numquam est sapiente quaerat\n",
    },
    {
      id: 3,
      title: "impedit autem distinctio omnis",
      description: "",
      urlToImage:
        "https://www.bt.com/content/dam/bt/portal/images/articles/sport/football/sport_football_salah_0405.jpg",
      publishedAt: "2020-09-13T21:54:31Z",
      content:
        "adipisci et accusantium hic deserunt voluptates consequatur omnis\nquod dolorem voluptatibus quis velit laboriosam mollitia illo et\niure aliquam dolorem nesciunt laborum\naperiam labore repellat et maxime itaque",
    },
    {
      id: 4,
      title: "assumenda quia sint",
      description: "",
      urlToImage:
        "https://www.insidehook.com/wp-content/uploads/2020/05/osaka-money-e1590502145910.jpg?fit=729%2C486",
      publishedAt: "2020-09-13T19:54:31Z",
      content:
        "adipisci et accusantium hic deserunt voluptates consequatur dolorem voluptatibus quis velit laboriosam mollitia illo et\niure aliquam dolorem nesciunt laborum\naperiam labore repellat et maxime itaque",
    },
    {
      id: 5,
      title: "impedit autem distinctio omnis ipsam voluptas eaque",
      description: "",
      urlToImage:
        "https://www.bt.com/content/dam/bt/portal/images/articles/sport/football/sport_football_salah_0405.jpg",
      publishedAt: "2020-09-13T19:40:31Z",
      content:
        "consequatur omnis\nquod dolorem voluptatibus quis velit laboriosam mollitia illo et\niure aliquam dolorem nesciunt laborum\naperiam labore repellat et maxime itaque",
    },
    {
      id: 6,
      title: "nam praesentium est ipsa libero aut",
      description: "",
      urlToImage: "https://img.btolat.com/news/large/127255.jpg",
      publishedAt: "2020-09-10T11:40:31Z",
      content:
        "consequatur omnis\nquod dolorem voluptatibus quis velit laboriosam mollitia abore repellat et maxime itaque",
    },
    {
      id: 7,
      title: "Katarina.Wolff@joel.io",
      description: "",
      urlToImage:
        "https://mediaaws.almasryalyoum.com/news/large/2020/02/29/1032245_0.jpg",
      publishedAt: "2020-09-10T11:40:31Z",
      content:
        "molestias incidunt eaque\nnumquam reprehenderit rerum ut ex ad\nomnis porro maiores quaerat harum nihil non quasi ea\nasperiores quisquam sunt fugiat eos ",
    },
    {
      id: 8,
      title: "nihil ad debitis rerum optio est cumque",
      description: "",
      urlToImage:
        "https://www.bt.com/content/dam/bt/portal/images/articles/sport/football/sport_football_salah_0405.jpg",
      publishedAt: "2020-09-10T11:40:31Z",
      content:
        "quia non dolor\ncorporis consectetur velit eos quis\nincidunt ut eos nesciunt repellendus voluptas voluptate sint neque\ndoloribus est minima autem quis velit illo",
    },
    {
      id: 9,
      title: "aspernatur ex dolor optio",
      description: "",
      urlToImage:
        "https://www.insidehook.com/wp-content/uploads/2020/05/osaka-money-e1590502145910.jpg?fit=729%2C486",
      publishedAt: "2020-09-10T11:40:31Z",
      content:
        "explicabo harum optio\ndolor dolores reprehenderit in\na itaque odit esse et et id\npossimus est ut consequuntur velit autem illo",
    },
    {
      id: 10,
      title: "cumque consequuntur excepturi consequatur consequatur est",
      description: "",
      urlToImage:
        "https://media.gemini.media/img/yallakora/Normal//2020/8/10/117779124-951373455382938-8501124279619968210-n2020_8_10_18_51.jpg",
      publishedAt: "2020-09-10T11:40:31Z",
      content:
        "ut in nostrum\nut et incidunt et minus nulla perferendis libero delectus\nnulla nemo deleniti\ndeleniti facere autem vero velit non molestiae assumenda",
    },
    {
      id: 11,
      title: "Egyptian Sports Industry",
      description: "",
      urlToImage:
        "https://mediaaws.almasryalyoum.com/news/large/2020/02/29/1032245_0.jpg",
      publishedAt: "2020-07-17T07:54:00Z",
      content:
        "qui qui deserunt expedita at\nprovident sequi veritatis sit qui nam tempora mollitia ratione\ncorporis vitae rerum pariatur unde deleniti ut eos ad\naut non quae nisi saepe",
    },
    {
      id: 12,
      title: "nesciunt numquam alias doloremque minus ipsam optio",
      description: "",
      urlToImage:
        "https://media.gemini.media/img/yallakora/Normal//2020/8/10/117779124-951373455382938-8501124279619968210-n2020_8_10_18_51.jpg",
      publishedAt: "2020-05-14T08:30:36Z",
      content:
        "eos hic deserunt necessitatibus sed iciatis numquam est sapiente quaerat\n",
    },
    {
      id: 13,
      title: "impedit autem distinctio omnis",
      description: "",
      urlToImage:
        "https://media.gemini.media/img/yallakora/Normal//2020/8/10/117779124-951373455382938-8501124279619968210-n2020_8_10_18_51.jpg",
      publishedAt: "2020-05-13T21:54:31Z",
      content:
        "adipisci et accusantium hic deserunt voluptates consequatur omnis\nquod dolorem voluptatibus quis velit laboriosam mollitia illo et\niure aliquam dolorem nesciunt laborum\naperiam labore repellat et maxime itaque",
    },
    {
      id: 14,
      title: "assumenda quia sint",
      description: "",
      urlToImage:
        "https://www.insidehook.com/wp-content/uploads/2020/05/osaka-money-e1590502145910.jpg?fit=729%2C486",
      publishedAt: "2020-11-13T10:34:31Z",
      content:
        "adipisci et accusantium hic deserunt voluptates consequatur dolorem voluptatibus quis velit laboriosam mollitia illo et\niure aliquam dolorem nesciunt laborum\naperiam labore repellat et maxime itaque",
    },
    {
      id: 15,
      title: "impedit autem distinctio omnis ipsam voluptas eaque",
      description: "",
      urlToImage:
        "https://www.bt.com/content/dam/bt/portal/images/articles/sport/football/sport_football_salah_0405.jpg",
      publishedAt: "2020-06-13T13:40:31Z",
      content:
        "consequatur omnis\nquod dolorem voluptatibus quis velit laboriosam mollitia illo et\niure aliquam dolorem nesciunt laborum\naperiam labore repellat et maxime itaque",
    },
    {
      id: 16,
      title: "nam praesentium est ipsa libero aut",
      description: "",
      urlToImage: "https://img.btolat.com/news/large/127255.jpg",
      publishedAt: "2020-07-10T11:40:31Z",
      content:
        "consequatur omnis\nquod dolorem voluptatibus quis velit laboriosam mollitia abore repellat et maxime itaque",
    },
    {
      id: 17,
      title: "Katarina.Wolff@joel.io",
      description: "",
      urlToImage:
        "https://www.bt.com/content/dam/bt/portal/images/articles/sport/football/sport_football_salah_0405.jpg",
      publishedAt: "2020-02-10T16:40:31Z",
      content:
        "molestias incidunt eaque\nnumquam reprehenderit rerum ut ex ad\nomnis porro maiores quaerat harum nihil non quasi ea\nasperiores quisquam sunt fugiat eos ",
    },
    {
      id: 18,
      title: "nihil ad debitis rerum optio est cumque",
      description: "",
      urlToImage:
        "https://mediaaws.almasryalyoum.com/news/large/2020/02/29/1032245_0.jpg",
      publishedAt: "2020-02-10T11:40:31Z",
      content:
        "quia non dolor\ncorporis consectetur velit eos quis\nincidunt ut eos nesciunt repellendus voluptas voluptate sint neque\ndoloribus est minima autem quis velit illo",
    },
    {
      id: 19,
      title: "aspernatur ex dolor optio",
      description: "",
      urlToImage: "https://img.btolat.com/news/large/127255.jpg",
      publishedAt: "2020-03-10T06:40:31Z",
      content:
        "explicabo harum optio\ndolor dolores reprehenderit in\na itaque odit esse et et id\npossimus est ut consequuntur velit autem illo",
    },
    {
      id: 20,
      title: "cumque consequuntur excepturi consequatur consequatur est",
      description: "",
      urlToImage:
        "https://mediaaws.almasryalyoum.com/news/large/2020/02/29/1032245_0.jpg",
      publishedAt: "2020-03-10T12:00:31Z",
      content:
        "ut in nostrum\nut et incidunt et minus nulla perferendis libero delectus\nnulla nemo deleniti\ndeleniti facere autem vero velit non molestiae assumenda",
    },
  ],
};

const NewsCard = () => {
  const classes = newsStyles();

  return (
    <Fragment>
      <Typography variant="h5" className={classes.recentlyAddedTxt}>
        Recently Added
      </Typography>
      <Grid className="thisisclass" container>
        {AllNewsJSON.articles.map((article) => (
          <Grid className={classes.newsCardGrid} item xs={6} md={3}>
            <Card className={classes.newsCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.urlToImage}
                  alt="green iguana"
                  className={classes.newsCardImg}
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {article.publishedAt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default NewsCard;
