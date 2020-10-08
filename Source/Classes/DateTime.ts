import * as Luxon from 'luxon';

type DateFormat =
    'DATE_SHORT' |
    'DATE_MED' |
    'DATE_MED_WITH_WEEKDAY' |
    'DATE_FULL' |
    'DATE_HUGE';

type TimeFormat =
    'TIME_SIMPLE' |
    'TIME_WITH_SECONDS' |
    'TIME_WITH_SHORT_OFFSET' |
    'TIME_WITH_LONG_OFFSET';

export default class DateTime {

    private UtcDate: Luxon.DateTime;
    private LocDate: Luxon.DateTime;

    private Timezone: string;

    /**
     * Constructor
     * @param Utc UTC ISO String
     * @param Timezone Timezone name - 'America/Sao_Paulo'
     */
    constructor(utc: string, timezone: string) {
        const utcDate = Luxon.DateTime.fromISO(utc);
        const locDate = utcDate.setZone(timezone);

        this.UtcDate = utcDate;
        this.LocDate = locDate

        this.Timezone = timezone;
    }

    /**
     * Utc
     * @return Current UTC ISO String
     */
    public static Utc() {
        return Luxon.DateTime.utc().toISO();
    }

    /**
     * Local
     * @return Current Local ISO String
     */
    public static Local() {
        return Luxon.DateTime.local().toISO();
    }

    /**
     * GetDate
     * @param Language Language code - 'pt-br'
     * @param Format Date format option
     * @return Formated date string
     */
    public GetDate(language: string, format?: DateFormat) {
        switch (format) {
            case "DATE_SHORT":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.DATE_SHORT)
            case "DATE_MED":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.DATE_MED)
            case "DATE_MED_WITH_WEEKDAY":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.DATE_MED_WITH_WEEKDAY)
            case "DATE_FULL":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.DATE_FULL)
            case "DATE_HUGE":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.DATE_HUGE)
            default:
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.DATE_SHORT)
        }
    }

    /**
     * GetTime
     * @param Language Language code - 'pt-br'
     * @param Format Date format option
     * @return Formated date string
     */
    public GetTime(language: string, format?: TimeFormat) {
        switch (format) {
            case "TIME_SIMPLE":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.TIME_SIMPLE)
            case "TIME_WITH_SECONDS":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.TIME_WITH_SECONDS)
            case "TIME_WITH_SHORT_OFFSET":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.TIME_WITH_SHORT_OFFSET)
            case "TIME_WITH_LONG_OFFSET":
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.TIME_WITH_LONG_OFFSET)
            default:
                return this.LocDate.setLocale(language).toLocaleString(Luxon.DateTime.TIME_WITH_SECONDS)
        }
    }
}
