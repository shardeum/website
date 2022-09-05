import Airtable from "airtable";
import { Project, Screenshot } from "models/project";
import { removeDuplicatesFromArray } from ".";
import { NewsItem, Shardian, CommunityStat } from "../types";

const configureAirtable = () => {
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  });
};

export const fetchNewList = () =>
  fetch("/api/news")
    .then((res) => res.json())
    .then(({ data }) =>
      data.map((item: any) => ({
        title: item.title,
        imageURL: item.image?.[0].thumbnails?.large.url,
        siteName: item.siteName,
        newsURL: item.newsURL,
      }))
    );

export const getSHMNewsArticles = (): Promise<NewsItem[]> => {
  configureAirtable();
  const data: any[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_NEWS_BASE_NAME as string)
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            const title = record.get("Title");
            const SiteName = record.get("Site Name & Date");
            const image: any = record.get("Image");
            const isPosted: any = record.get("isPosted");
            const newsURL = record.get("News URL");
            if (isPosted) {
              data.push({
                title,
                siteName: SiteName,
                imageURL: image?.[0]?.thumbnails?.large?.url,
                newsURL,
              });
            }
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve(data);
        }
      );
  });
};

export const getSuperShardians = (): Promise<Shardian[]> => {
  configureAirtable();
  const data: Shardian[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_SUPERSHARDEUM as string)
      ?.select({
        view: "Grid view",
      })
      ?.firstPage()
      .then((records) => {
        records.forEach(function (record) {
          const name = record.get("Name")!.toString();
          const description = record.get("Description")!.toString();
          const category = record.get("Category")!.toString();
          const image = record.get("Image");
          data.push({ name, description, category, image });
        });
        resolve(data);
      });
  });
};

export const getCommunityStats = (): Promise<CommunityStat[]> => {
  configureAirtable();
  const data: CommunityStat[] = [];
  const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_AIRTABLE_COMMUNITYSTATS as string)
      ?.select({
        view: "Grid view",
      })
      ?.firstPage()
      .then((records) => {
        records.forEach(function (record) {
          const key = (record.get("key") || "").toString();
          const followerCount = (record.get("followerCount") || "").toString();
          data.push({ key, followerCount });
        });
        resolve(data);
      });
  });
};

export const getSHMProjects = (): Promise<{
  projects: Project[];
  categories: { [category: string]: number };
}> => {
  configureAirtable();
  const data: Project[] = [];
  const categoryCount: { [category: string]: number } = {};
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);

  return new Promise((resolve, reject) => {
    base(process.env.SHARDEUM_EXPLORE_BASE_NAME as string)
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            try {
              // extract row details
              const projectId = record.getId();
              const projectName = record.get("Project Name") as string;
              const projectDescription = record.get("Project Description") as string;
              const projectCategory = record.get("Project Category") as string;
              const projectLogo: any = record.get("Project Logo") as string[];
              const projectScreenshots = record.get("Project Screenshots") as Screenshot[];
              const projectWebsiteURL = record.get("Project Website URL") as string;
              const projectDateCreated = record.get("Created") as string;
              const projectUpvotes = (record.get("Upvote Users") as string[])?.length ?? 0;
              // const pointOfContactEmailID = record.get("Your Point of Contact's Email id");
              const projectGithubURL = (record.get("Project Github URL") as string) || "";

              if (projectName) {
                data.push({
                  id: projectId,
                  name: projectName,
                  description: projectDescription,
                  category: projectCategory || "Others",
                  logo: (projectLogo && projectLogo[0]?.url) || "/Shardeum.png",
                  screenShots: projectScreenshots,
                  website: projectWebsiteURL,
                  dateCreated: projectDateCreated,
                  numUpvotes: projectUpvotes,
                  githubUrl: projectGithubURL,
                });

                categoryCount[projectCategory] = categoryCount[projectCategory]
                  ? categoryCount[projectCategory] + 1
                  : 1;
                categoryCount["All"] = categoryCount["All"] ? categoryCount["All"] + 1 : 1;
              }
            } catch (err) {
              console.log(err);
            }
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }

          // get the categories (DEX, NFT etc)
          // const categories: string[] = Array.from(new Set(data.map((item) => item.category)));

          resolve({ projects: data, categories: categoryCount });
        }
      );
  });
};

// to add user to users table
export const createUser = (userId: string) => {
  configureAirtable();
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);
  return base("users").create({ UserId: userId }, function (err, record) {
    console.log({ record });
    if (err) {
      console.error(err);
    }
  });
};

// to get the upvoted projects of a user
export const getUserUpvotedProjects = (
  userId: string
): Promise<{
  upvotedProjectIds: string[];
}> => {
  configureAirtable();
  let data: string[] = [];
  let userFound = false;
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);

  return new Promise((resolve, reject) => {
    base("users")
      .select({
        view: "Grid view",
        filterByFormula: `{UserId} = "${userId}"`,
        maxRecords: 1,
        pageSize: 1,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            try {
              // extract row details
              const projectIds = (record.get("UpvotedProjects") as string[]) || [];
              userFound = true;

              data = [...projectIds];
            } catch (err) {
              console.log(err);
            }
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }

          if (!userFound) {
            console.log("User not found");
            createUser(userId);
          }

          resolve({ upvotedProjectIds: data || [] });
        }
      );
  });
};

// get user's row field id based on user id
export const getUserId = (userId: string): Promise<string> => {
  configureAirtable();
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);
  return new Promise((resolve, reject) => {
    base("users")
      .select({
        view: "Grid view",
        filterByFormula: `{UserId} = "${userId}"`,
        maxRecords: 1,
        pageSize: 1,
      })
      .eachPage(function page(records) {
        records.forEach(function (record) {
          try {
            const userId = record.getId();
            resolve(userId);
          } catch (err) {
            console.error(err);
            reject(err);
          }
        });
      });
  });
};

// // to add user to project upvoted users
// export const addUserToProjectUpvotedUsers = (projectId: string, userId: string) => {
//   configureAirtable();
//   const base = Airtable.base("appYSqEEnRwWor3V9");

//   return new Promise((resolve, reject) => {
//     base(process.env.SHARDEUM_EXPLORE_BASE_NAME as string).update(projectId, {});
//   });
// };

// to add upvote of project of project id to user of user id
export const addProjectToUserUpvotedProjects = (
  projectRecordId: string,
  userId: string
): Promise<{ success: boolean }> => {
  configureAirtable();
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);

  return new Promise((resolve, reject) => {
    getUserUpvotedProjects(userId)
      .then((data) => {
        getUserId(userId).then((userRecordId) => {
          const upvotedProjectIds = data.upvotedProjectIds;
          const newUpvotedProjectIds = removeDuplicatesFromArray([
            ...upvotedProjectIds,
            projectRecordId,
          ]);
          base("users").update(
            userRecordId,
            { UpvotedProjects: newUpvotedProjectIds },
            function (err) {
              if (err) {
                console.error(err);
                return reject(err);
              }

              resolve({ success: true });
            }
          );
        });
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

// to remove upvote of project of project id from user of user id
export const removeProjectFromUserUpvotedProjects = (
  projectRecordId: string,
  userId: string
): Promise<{ success: boolean }> => {
  configureAirtable();
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);

  return new Promise((resolve, reject) => {
    getUserUpvotedProjects(userId)
      .then((data) => {
        getUserId(userId).then((userRecordId) => {
          const upvotedProjectIds = data.upvotedProjectIds;
          const newUpvotedProjectIds = upvotedProjectIds.filter((id) => id !== projectRecordId);
          base("users").update(
            userRecordId,
            { UpvotedProjects: newUpvotedProjectIds },
            function (err) {
              if (err) {
                console.error(err);
                return reject(err);
              }

              resolve({ success: true });
            }
          );
        });
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getProjectById = (
  projectRecordId: string,
  userId = ""
): Promise<{
  project: Project;
  userUpvoted: boolean;
}> => {
  configureAirtable();
  const base = Airtable.base(process.env.SHARDEUM_EXPLORE_BASE_ID as string);

  return new Promise((resolve, reject) => {
    base(process.env.SHARDEUM_EXPLORE_BASE_NAME as string)
      .find(projectRecordId)
      .then((record) => {
        const projectId = record.getId();
        const projectName = record.get("Project Name") as string;
        const projectDescription = record.get("Project Description") as string;
        const projectCategory = record.get("Project Category") as string;
        const projectLogo: any = record.get("Project Logo") as string[];
        const projectScreenshots = record.get("Project Screenshots") as Screenshot[];
        const projectWebsiteURL = record.get("Project Website URL") as string;
        const projectDateCreated = record.get("Created") as string;
        const projectUpvotes = (record.get("Upvote Users") as string[])?.length ?? 0;
        const projectGithub = (record.get("Project Github URL") as string) || "";
        const project: Project = {
          id: projectId,
          name: projectName,
          description: projectDescription,
          category: projectCategory || "Others",
          logo: (projectLogo && projectLogo[0]?.url) || "/Shardeum.png",
          screenShots: projectScreenshots || [],
          website: projectWebsiteURL,
          dateCreated: projectDateCreated,
          numUpvotes: projectUpvotes,
          githubUrl: projectGithub,
        };

        if (!userId) {
          return resolve({ project, userUpvoted: false });
        }

        getUserId(userId)
          .then((userRecordId) => {
            return resolve({
              project,
              userUpvoted:
                (record.get("Upvote Users") as string[])?.includes(userRecordId) ?? false,
            });
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
