package ac.cr.tec.stravatec.Utilities


/**
 * It's a class that contains all the constants that are used in the database
 */
object Utilities {
    const val TABLE_SPORTMAN = "Sportman"
    const val CREATE_SPORTMAN_TABLE = ("CREATE TABLE " + TABLE_SPORTMAN +
            " (" + "username" + " STRING, " + "name"
            + " STRING, " + "lastname1" + " STRING, " + "lastname2"
            + " STRING, " + "birthDate" + " STRING, "
            + "nationality" + " STRING," + "password" +
            " STRING," + "picture" + " STRING")


    const val TABLE_CHALLENGE = "Challenge"
    const val CREATE_CHALLENGE_TABLE = ("CREATE TABLE " + TABLE_CHALLENGE +
            " (" + "id INTEGER, " +
            "activityName STRING, " +
            "name STRING, " +
            "period STRING, " +
            "type STRING, " +
            "access STRING)")

    const val TABLE_ACTIVITY = "Activity"
    const val CREATE_ACTIVITY_TABLE = ("CREATE TABLE " + TABLE_ACTIVITY +
            " (" + "id INTEGER, " +
            "idSportman STRING, " +
            "activityName STRING, " +
            "dateandTime STRING, " +
            "mileage STRING, " +
            "gpx STRING, " +
            "eventType STRING, " +
            "duration STRING)")



    const val TABLE_RACE = "Race"
    const val CREATE_RACE_TABLE = ("CREATE TABLE " + TABLE_RACE +
            " (" + "id INTEGER, " +
            "idActivity INTEGER, " +
            "activityType STRING, " +
            "cost STRING, " +
            "bankAccount STRING, " +
            "name STRING, " +
            "access STRING)")

    const val TABLE_SPONSOR = "Sponsor"
    const val CREATE_SPONSOR_TABLE = ("CREATE TABLE " + TABLE_SPONSOR +
            " (" + "id INTEGER, " +
            "sponsorName STRING, " +
            "representant STRING, " +
            "representantPhone STRING, " +
            "logo STRING)")







//    const val TABLE_ACTIVITY = "activity" //Activity
//    const val TABLE_ADDS = "adds"
//    const val TABLE_BANK_ACCOUNT = "bank_account" //Race
//    const val TABLE_BELONGS_TO = "belongs_to"
//    const val TABLE_CATEGORY = "category"
//    const val TABLE_CHALLENGE = "challenge" //Challenge
//    const val TABLE_GROUP = "[group]" //Group*
//    const val TABLE_JOIN_CHALLENGE = "join_challenge"
//    const val TABLE_JOIN_RACE = "join_race"
//    const val TABLE_MANAGES = "manages"
//    const val TABLE_RACE = "race" //Race
//    const val TABLE_REGISTER = "register"
//    const val TABLE_SPONSOR = "sponsor" //Sponsor
//    const val TABLE_SPONSORS_RACE = "sponsors_race"
//    const val TABLE_SPORT = "sport"
//    const val TABLE_USER = "user" //Sportman
//    const val FIELD_ID = "Id" //activity ID
//    const val FIELD_DATE = "Date" // dateAndTime
//    const val FIELD_DURATION = "Duration" //Duration
//    const val FIELD_MILEAGE = "Mileage"//Mileage
//    const val FIELD_ROUTE = "Route"
//    const val FIELD_SPORTNAME = "SportName"
//    const val FIELD_USERNAME = "UserName"
//    const val FIELD_FRIENDUSERNAME = "FriendUserName"
//    const val FIELD_RACEID = "Race_ID" //race id
//    const val FIELD_ACCOUNT = "Account"
//    const val FIELD_GROUPID = "GroupId"
//    const val FIELD_NAME = "Name"
//    const val FIELD_DESCRIPTION = "Description"
//    const val FIELD_VALIDTHRU = "ValidThru"
//    const val FIELD_TYPE = "Type"
//    const val FIELD_ACCESS = "Access"
//    const val FIELD_ACTIVITYID = "ActivityId"
//    const val FIELD_CATEGORYNAME = "CategoryName"
//    const val FIELD_CHALLENGEID = "Challenge_ID"
//    const val FIELD_COST = "Cost"
//    const val FIELD_COMERCIALNAME = "ComercialName"
//    const val FIELD_LOGO = "Logo"
//    const val FIELD_AGENTNUMBER = "AgentNumber"
//    const val FIELD_FNAME = "first_name"
//    const val FIELD_SNAME = "second_name"
//    const val FIELD_FSNAME = "first_surname"
//    const val FIELD_SSNAME = "second_surname"
//    const val FIELD_SPONSORID = "SponsorId"
//    const val FIELD_PASS = "password"
//    const val FIELD_LEVEL = "Level"
//    const val FIELD_PROFILEPIC = "ProfilePicture"
//    const val FIELD_BDATE = "BirthDate"
//    const val FIELD_NATION = "Nationality"
//    const val CREATE_ACTIVITY_TABLE =
//        "CREATE TABLE " + TABLE_ACTIVITY + " (" + FIELD_USERNAME + " TEXT, " + FIELD_ID + " INTEGER, " + FIELD_DATE + " TEXT, " + FIELD_DURATION + " TEXT, " + FIELD_MILEAGE + " INTEGER, " + FIELD_ROUTE + " TEXT, " + FIELD_SPORTNAME + " TEXT)"
//    const val CREATE_ADDS_TABLE =
//        "CREATE TABLE " + TABLE_ADDS + " (" + FIELD_USERNAME + " TEXT, " + FIELD_FRIENDUSERNAME + " TEXT)"
//    const val CREATE_BANKACCOUNT_TABLE =
//        "CREATE TABLE " + TABLE_BANK_ACCOUNT + " (" + FIELD_RACEID + " INTEGER, " + FIELD_ACCOUNT + " INTEGER)"
//    const val CREATE_BELONGSTO_TABLE =
//        "CREATE TABLE " + TABLE_BELONGS_TO + " (" + FIELD_USERNAME + " TEXT, " + FIELD_GROUPID + " TEXT)"
//    const val CREATE_CATEGORY_TABLE =
//        "CREATE TABLE " + TABLE_CATEGORY + " (" + FIELD_NAME + " TEXT, " + FIELD_DESCRIPTION + " TEXT)"
//    const val CREATE_CHALLENGE_TABLE =
//        "CREATE TABLE " + TABLE_CHALLENGE + " (" + FIELD_ID + " INTEGER, " + FIELD_VALIDTHRU + " TEXT, " + FIELD_TYPE + " TEXT, " + FIELD_ACCESS + " TEXT, " + FIELD_NAME + " TEXT, " + FIELD_ACTIVITYID + " INT)"
//    const val CREATE_GROUP_TABLE =
//        "CREATE TABLE " + TABLE_GROUP + " (" + FIELD_NAME + " TEXT, " + FIELD_DESCRIPTION + " TEXT)"
//    const val CREATE_JOINCHALLENGE_TABLE =
//        "CREATE TABLE " + TABLE_JOIN_CHALLENGE + " (" + FIELD_USERNAME + " TEXT, " + FIELD_CHALLENGEID + " INT)"
//    const val CREATE_JOINRACE_TABLE =
//        "CREATE TABLE " + TABLE_JOIN_RACE + " (" + FIELD_USERNAME + " TEXT, " + FIELD_RACEID + " INT)"
//    const val CREATE_MANAGES_TABLE =
//        "CREATE TABLE " + TABLE_MANAGES + " (" + FIELD_USERNAME + " TEXT, " + FIELD_GROUPID + " TEXT)"
//    const val CREATE_RACE_TABLE =
//        "CREATE TABLE " + TABLE_RACE + " (" + FIELD_ID + " INTEGER, " + FIELD_NAME + " TEXT, " + FIELD_COST + " INTEGER, " + FIELD_DATE + " TEXT, " + FIELD_ACCESS + " TEXT, " + FIELD_ACTIVITYID + " INT, " + FIELD_CATEGORYNAME + " TEXT)"
//    const val CREATE_USER_TABLE =
//        "CREATE TABLE " + TABLE_USER + " (" + FIELD_USERNAME + " TEXT, " + FIELD_FNAME + " TEXT, " + FIELD_SNAME + " TEXT, " + FIELD_FSNAME + " TEXT, " + FIELD_SSNAME + " TEXT, " + FIELD_LEVEL + " TEXT, " + FIELD_PROFILEPIC + " BLOB, " + FIELD_BDATE + " TEXT, " + FIELD_PASS + " TEXT, " + FIELD_NATION + " TEXT)"
//    const val CREATE_REGISTER_TABLE =
//        "CREATE TABLE " + TABLE_REGISTER + " (" + FIELD_USERNAME + " TEXT, " + FIELD_ACTIVITYID + " INTEGER)"
//    const val CREATE_SPONSOR_TABLE =
//        "CREATE TABLE " + TABLE_SPONSOR + " (" + FIELD_ID + " INT, " + FIELD_COMERCIALNAME + " TEXT, " + FIELD_LOGO + " BLOB, " + FIELD_AGENTNUMBER + " INT, " + FIELD_FNAME + " TEXT, " + FIELD_SNAME + " TEXT, " + FIELD_FSNAME + " TEXT, " + FIELD_SSNAME + " TEXT)"
//    const val CREATE_SPONSORRACE_TABLE =
//        "CREATE TABLE " + TABLE_SPONSORS_RACE + " (" + FIELD_RACEID + " INTEGER, " + FIELD_SPONSORID + " INTEGER)"
//    const val CREATE_SPORT_TABLE =
//        "CREATE TABLE " + TABLE_SPORT + " (" + FIELD_NAME + " TEXT, " + FIELD_DESCRIPTION + " TEXT)"
}
