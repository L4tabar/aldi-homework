## Task-3: API Testing

As I understood, in the scope of this task no real API testing is required, and I should provide a few examples of how it could be done for an imaginary task management service.

I hope the way that I choose (implementing maybe less test, but make them reusable and just commenting the missed cases) is acceptable, as behind it there is a setup that could be used for any other API testing, and could be easily adjusted to it.
I was thinking about deploying a TODO app, or finding an online API for it, but again I decided to skip it and stick to the task description.

There are again some parts that looks like an overkill, but I wanted to provide something that could be reused. And even like this I'm missing a few things, like the http-status-codes package, etc., but I hope it is not required in the scope of this task.

The tests are under the [tests/api](tests/api) folder. <br>
It could be hard to find the implementation included only in the scope of task 3, so I'd suggest to check the related PR (and more precisely the 2nd commit in it as I renamed the folder).
