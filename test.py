def QuickSort(a):
    if len(a)<=1:
        return a
    pivot=a[0]
    left=[i for i in a[1:] if i<=pivot]
    right=[i for i in a[1:] if i>pivot]
    return QuickSort(left)+[pivot]+QuickSort(right)

n=5
a=[1,5,3,4,2]

print(QuickSort(a))