# ef-status-monitor
Executive Function Status Monitor

## Statement of Purpose

The purpose of this application will be to help *time-blind* individuals, such as those afflicted with ADHD, better manage their time, responsibilities, and habits. As such, much focus will be given to visualizations and indicators that help individuals realize how much time has elapsed or how much time is left remaining for a given task or context.

## Customization

As each time-blind individual is different in her specific needs, the app should be highly customizable both in functionality and in appearance.

### Period

A **period** or **period basis** shall be a foundational organizational principle of the app. The **default period** bases available include: 
- daily
- sprintly (2 days)
- weekly
- fortnightly (2 weeks)
- monthly, and 
- yearly

#### Project-Period

A **project-period** is a period/period basis especially defined by the user to last a specific amount of time (e.g., 18 days). 

## Design Elements

The app will consist of several components and task-types.

### Components

#### Status Bar

The status bar should be at the top of the app and will display the current time and the current date. Status bars will indicate progress made through a given duration (e.g., year, month, day).

The status bar will also include gamification elements. The user's current *level* should be indicated, as well as her remaining *XP needed to LVL UP*.

### Task Types

#### Countable

A **countable** is defined as a goal in which a certain task is to be executed a set number of times given a duration of time, e.g., walk 5 laps around the block daily.

Completion of a countable confers experience points to the user.

#### Countable Combo

A **countable combo** is a chain of countables which must be completed *immediately* and in the order specified. As the time-blind individual may be distraction-prone by nature, she is highly encouraged to transition to the *very next countable* in the countable combo without any kind of transition. It is during transitional periods that her attention may be stolen by something in her immediate vicinity, something very much to be avoided.

#### Durational

A **durational** is defined as a goal in which a certain *state* is to be entered into for a minimum amount of time during a given default duration, e.g., spend 5 hours writing novel daily.

#### Durational Combo

A **durational combo** is a chain of durationals. When durational A ends, the user is to enter durational B immediately for the reasons specified in the section above on countable combos.

#### Project

A **project** is a large, amorphous, non-countable goal that confers upon the user a large number of experience points. A project is to be paired with a specific **project-period** such as 16 days. E.g. "Learn Ruby on Rails in 20 days"

The end of the **project-period** is a **deadline**.

A project is different from a durational in that it is not quite clear how much time (in hours, minutes, etc.) is required for completion. Nonetheless, the project should be complete by the **deadline**.

### Repeatability of Tasks

Countables, countable-combos, durationals, and durational-combos may be set to *repeat* according to a *period basis* (defined above). The user will lose (miss) the chance to earn experience points for a given period after the period has ended, e.g., if a *countable* defined as "do two push ups daily" wasn't performed on Tuesday, then those experience points that the player would have earned from doing push-ups on Tuesday are gone forever.

## TLDR

This is essentially a gamified to-do list for people with ADHD or people who exhibit ADHD-like behavioral patterns.
