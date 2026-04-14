/**
 * 프로젝트 목록 아이템에서 상세 페이지용 슬래그를 뽑습니다.
 * `path.split('/').pop()`은 `index` 등으로 깨질 수 있어 사용하지 않습니다.
 */
export function projectRouteSlug(item: { slug?: string | null; path?: string | null }) {
  const fromFm = item.slug?.trim()
  if (fromFm)
    return fromFm
  const parts = (item.path ?? '').split('/').filter(Boolean)
  const i = parts.indexOf('projects')
  if (i !== -1 && parts[i + 1])
    return parts[i + 1]!
  return parts.at(-1) ?? ''
}
