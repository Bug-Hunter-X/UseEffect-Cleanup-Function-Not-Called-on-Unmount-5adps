# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue where the cleanup function in a React `useEffect` hook is not called when the component unmounts.  The example uses a simple counter component to illustrate the problem.

## Problem

The `useEffect` hook is used with an empty dependency array `[]`, ensuring that the effect runs only once upon component mount.  However, the cleanup function, intended to run before the component unmounts, isn't executed.

## Solution

The issue is often related to how the component is unmounted.  In this example, the solution is provided by confirming that the component is indeed unmounting and the cleanup function is correctly defined and operating as expected.  Improper usage of parent component state and unexpected conditional renders can also prevent the execution of a cleanup function.  Thoroughly examine how the component is unmounted, and ensure that there are no other events or state changes that might interrupt the unmounting process.  Also, double-check for any errors or exceptions thrown in the useEffect's cleanup function.