<template>
  <div id="Home">
    <Title />
    <div class="press">
      <div class="news">
        <ul>
          <li>
            <p>
              <a href="" target="_blank"
                >Roguelike+Board games, is it possible to succeed?</a
              >
            </p>

            <div class="news-tag">
              <span class="mr88"
                ><a href="" target="_blank"> Fighting on tatami</a></span
              >
              <span
                ><a href="" target="_blank"
                  >Is there really a dragon in the world?</a
                ></span
              >
            </div>
          </li>
          <li>
            <p>
              <a href="" target="_blank"
                >Make complaints about the table tennis meeting.</a
              >
            </p>
            <div class="news-tag">
              <span class="mr88"
                ><a href="" target="_blank">In the board game</a></span
              >
              <span
                ><a href="" target="_blank"
                  >What game can play for a thousand years?</a
                ></span
              >
            </div>
          </li>
        </ul>
        <div class="news-adver">
          <a href="" target="_blank">
            <img src="../assets/img/home-banner.jpg" alt="" />
            <i class="fade"></i>
          </a>
        </div>
      </div>
      <el-carousel indicator-position="outside" class="banner">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="news">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in news" :key="item">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <article>
        <h2>Hot Games</h2>
        <div class="game-container">
          <div class="card">
            <div class="game-img">
              <a href=""><img src="../assets/img/game-3.jpg" alt="" /></a>
            </div>
            <div class="game-info">
              <div class="game-name">
                GAIA PROJECT <span class="grades">9.3</span>
              </div>
              <div class="game-type">Strategy</div>
              <div class="game-des">
                The works of the same type of mysterious earth designer are
                German works, which are suitable for strategic players who like
                to think carefully,Learning is a little complicated, but after
                learning, you will find that the rules are actually very simple,
                or very smooth. The rules are unified rather than fragmented, so
                it is not difficult to remember after playing, but the playing
                methods are ever-changing. Compared with the mysterious earth,
                the advantage is that there will be no significant difference in
                the experience from 4 people to 2-4 people. Although the random
                map has a slight impact on the balance, the increased change and
                amount of thinking are definitely worth it. Finally shout a wave
                of website address, totoman Online, there are all kinds of
                bosses waiting for you to hang
              </div>
            </div>
          </div>
          <div class="card">
            <div class="game-img">
              <a href=""><img src="../assets/img/game-4.jpg" alt="" /></a>
            </div>
            <div class="game-info">
              <div class="game-name">
                The Others <span class="grades">7.7</span>
              </div>
              <div class="game-type">Theme</div>
              <div class="game-des">
                The seven sins currently start with five sins and a team
                expansion and Apocalypse expansion. I've driven with my
                classmates about six times. First of all, make an overall
                evaluation. Although the level of board game strategy is not as
                good as that of German games, I think it is appropriate to say
                that it is meipide's heart. At the same time, it absorbs the
                charm of American Board Game Theme (with sufficient story
                background and distinctive characters and monsters) and the
                advantages of German board game strategy (this is true for both
                players, which will be discussed later).
              </div>
            </div>
          </div>
          <div class="card">
            <div class="game-img">
              <a href=""><img src="../assets/img/game-5.png" alt="" /></a>
            </div>
            <div class="game-info">
              <div class="game-name">
                FOOD CHAIN <span class="grades">8.3</span>
              </div>
              <div class="game-type">Strategy</div>
              <div class="game-des">
                Just played two games! Win for the first time and lose miserably
                for the second time... This game is highly playable Mainly, the
                only randomness is the map... Randomness other than player
                action* So the strategy actually needs to change with the
                emergence of the map! You can't always use the same technology
                books! Then remember that milestones is very important At the
                beginning of the initial period... Pay more attention to the
                employment trend of everyone... Take milestones to keep up with
              </div>
            </div>
          </div>
          <div class="card">
            <div class="game-img">
              <a href=""><img src="../assets/img/game-6.jpg" alt="" /></a>
            </div>
            <div class="game-info">
              <div class="game-name">
                TERRAFORMING MARS <span class="grades">8.6</span>
              </div>
              <div class="game-type">Strategy</div>
              <div class="game-des">
                As a new game in 2016, it rushed to the top of bgg15 soon after its launch, which is really curious. I thought it had something to do with the mysterious earth, but it didn't. The game is good. The card car is big enough, there will be no fixed routine, and each round is also a test.
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "../components/Title.vue";
export default {
  data() {
    return {
      banner: [
        {
          url: require("../assets/img/banner_1.png"),
        },
        {
          url: require("../assets/img/banner_2.png"),
        },
        {
          url: require("../assets/img/banner_3.png"),
        },
        {
          url: require("../assets/img/banner_4.png"),
        },
      ],
      news: [
        {
          url: require("../assets/img/news-1.png"),
        },
        {
          url: require("../assets/img/news-2.png"),
        },
        {
          url: require("../assets/img/news-3.png"),
        },
      ],
    };
  },
  components: {
    Title,
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style lang="less">
#Home {
  width: 100%;
  min-width: 900px;
  .press {
    max-width: 1200px;
    box-sizing: border-box;
    padding: 15px 27px 15px 26px;
    border: 1px solid #dfdfdf;
    margin: 0 auto 25px;
    -webkit-box-shadow: 0 0 5px 0 rgb(0 0 0 / 16%);
    -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 16%);
    overflow: hidden;
    background: #f5f5f5;
    .news {
      width: 40%;
      min-width: 30%;
      box-sizing: border-box;
      float: left;
      overflow: hidden;
      padding-top: 11px;
      ul {
        overflow: hidden;
        li {
          overflow: hidden;
          margin-bottom: 21px;
          p {
            font-size: 20px;
            margin-bottom: 10px;
            a {
              color: #252525;
              display: block;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          .news-tag {
            font-size: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            overflow: hidden;
            span.mr88 {
              margin-right: 56px;
              vertical-align: middle;
              width: 160px;
              overflow: hidden;
              a {
                color: #9f9f9f;
              }
            }
            span {
              display: inline-block;
              a {
                color: #9f9f9f;
              }
            }
          }
        }
      }
      .news-adver {
        overflow: hidden;
        width: 408px;
        height: 160px;
        position: relative;
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .banner {
      width: 60%;
      min-width: 60%;
      height: 331px;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
    }
    .el-carousel__item img {
      width: 100%;
      height: 100%;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .news {
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .main {
    max-width: 1200px;
    margin: 0 auto;
    article {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      margin-bottom: 15px;
      box-shadow: 0 0 4px #ddd;
      padding: 25px 20px;
      background-color: #fafafa;
      font-family: Quicksand, Microsoft YaHei, sans-serif;
      h2 {
        margin-bottom: 15px;
        font-size: 20px;
        letter-spacing: 3px;
        line-height: 24px;
        text-indent: 10px;
        border-bottom: 1px dashed #eee;
        padding-bottom: 30px;
        margin-bottom: 30px;
      }
      .game-container {
        display: flex;
        flex-wrap: wrap;
        .card {
          flex: 0 0 45%;
          max-width: 45%;
          box-sizing: border-box;
          display: flex;
          margin: 10px 25px;
          height: 200px;
          padding: 120px;
          margin-bottom: 30px;
          position: relative;
          padding: 10px;
          background: #ffffff;
          border-radius: 4px;
          transition: 0.3s;
          &:hover {
            box-shadow: 0 34px 20px -24px rgb(136 161 206 / 30%);
            transform: translateY(-5px);
          }
          .game-img {
            a {
              max-width: 33%;
              background-color: #ffffff;
              height: 0;
              overflow: hidden;
              border-radius: 4px 4px 0 0;
            }
            img {
              margin: 0 auto;
              max-height: 180px;
              width: 180px;
              overflow: hidden;
            }
          }
          .game-info {
            padding: 10px;
            display: flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 20px;

            .game-name {
              color: #34495e;
              font-size: 24px;
              text-decoration: none;
              transition: all 0.3s ease;
              .grades {
                color: orange;
                font-size: 18px;
                padding-left: 5px;
              }
            }
            .game-type {
              background: gray;
              display: inline-block;
              width: 50px;
              text-align: center;
              font-size: 12px;
              border-radius: 5px;
              padding: 3px 10px;
              color: #fff;
              font-size: 12px;
            }
            .game-des {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>